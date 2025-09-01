import { NextResponse } from "next/server";
import clientPromise, { verifyConnection } from "@/lib/mongodb";
import { compare, hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    // Validate request body
    if (!req.body) {
      return NextResponse.json({ error: "Missing request body" }, { status: 400 });
    }

    const { userType, userId, operatorId, password } = await req.json();
    
    // Validate required fields
    if (!password) {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }

    if (userType !== "admin" && userType !== "operator") {
      return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
    }

    if (userType === "admin" && !userId) {
      return NextResponse.json({ error: "Admin user ID required" }, { status: 400 });
    }

    if (userType === "operator" && !operatorId) {
      return NextResponse.json({ error: "Operator ID required" }, { status: 400 });
    }

    // Verify MongoDB connection before proceeding
    const isConnected = await verifyConnection();
    if (!isConnected) {
      console.error("MongoDB connection failed");
      return NextResponse.json({ error: "Database connection error" }, { status: 500 });
    }
    
    // Connect to database
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("staff");

    // Find user based on type
    let user = null;
    if (userType === "admin") {
      user = await collection.findOne({ userId, role: "admin" });
    } else {
      user = await collection.findOne({ operatorId, role: "operator" });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // Check if user is active
    if (user.status === "inactive") {
      return NextResponse.json({ error: "Account is inactive" }, { status: 403 });
    }

    // Verify password
    let passwordMatch = false;
    
    try {
      // For backward compatibility - check if password is hashed
      if (user.password && user.password.startsWith('$2')) {
        // Password is hashed with bcrypt
        passwordMatch = await compare(password, user.password);
      } else { 
        // Legacy plain text password (for backward compatibility)
        passwordMatch = user.password === password;
        
        // Hash the password for future logins
        if (passwordMatch) {
          try {
            const hashedPassword = await hash(password, 10);
            await collection.updateOne(
              { _id: user._id },
              { $set: { password: hashedPassword } }
            );
            console.log(`Password hashed for user: ${user._id}`);
          } catch (hashError) {
            console.error("Password hashing error:", hashError);
            // Continue with login even if hashing fails
          }
        }
      }
    } catch (error) {
      console.error("Password verification error:", error);
      return NextResponse.json({ error: "Authentication error" }, { status: 500 });
    }

    if (!passwordMatch) {
      // Log failed login attempt
      await db.collection("auditLogs").insertOne({
        action: "failed_login",
        userType,
        userId: userType === "admin" ? userId : operatorId,
        timestamp: new Date(),
        ipAddress: req.headers.get("x-forwarded-for") || "unknown"
      });
      
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Update last login time
    await collection.updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    // Log successful login
    await db.collection("auditLogs").insertOne({
      action: "successful_login",
      userType,
      userId: user._id.toString(),
      timestamp: new Date(),
      ipAddress: req.headers.get("x-forwarded-for") || "unknown"
    });

    // Create response with user data (excluding sensitive information)
    const response = NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status || "active"
    });
    
    // Set cookies for authentication
    response.cookies.set({
      name: 'asan_user_id',
      value: user._id.toString(),
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });
    
    response.cookies.set({
      name: 'asan_user_role',
      value: user.role,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });
    
    return response;
  } catch (err) {
    console.error("Login error:", err);
    // Provide more detailed error message for debugging
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Internal server error: ${(err as Error).message}`
      : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

