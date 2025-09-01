// app/api/login/route.ts
import { NextResponse } from "next/server";
import clientPromise, { verifyConnection } from "@/lib/mongodb";
import { compare } from "bcrypt";

export async function POST(req: Request) {
  try {
    const { userType, userId, operatorId, password } = await req.json();

    // 🔹 Validate required fields
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

    // 🔹 Verify DB connection
    const isConnected = await verifyConnection();
    if (!isConnected) {
      return NextResponse.json({ error: "Database connection error" }, { status: 500 });
    }

    // 🔹 Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("staff");

    // 🔹 Find user
    let user = null;
    if (userType === "admin") {
      user = await collection.findOne({ userId, role: "admin" });
    } else {
      user = await collection.findOne({ operatorId, role: "operator" });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (user.status === "inactive") {
      return NextResponse.json({ error: "Account is inactive" }, { status: 403 });
    }

    // 🔹 Verify password (supports both hashed + plain text)
    let passwordMatch = false;
    if (user.password?.startsWith("$2")) {
      passwordMatch = await compare(password, user.password); // bcrypt
    } else {
      passwordMatch = user.password?.trim() === password.trim(); // plain text
    }

    if (!passwordMatch) {
      await db.collection("auditLogs").insertOne({
        action: "failed_login",
        userType,
        userId: userType === "admin" ? userId : operatorId,
        timestamp: new Date(),
        ipAddress: req.headers.get("x-forwarded-for") || "unknown",
      });
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // 🔹 Update last login
    await collection.updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    // 🔹 Log successful login
    await db.collection("auditLogs").insertOne({
      action: "successful_login",
      userType,
      userId: user._id.toString(),
      timestamp: new Date(),
      ipAddress: req.headers.get("x-forwarded-for") || "unknown",
    });

    // 🔹 Build response (exclude password)
    const response = NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status || "active",
    });

    // 🔹 Cookies that work everywhere (local + prod)
    const isProd = process.env.NODE_ENV === "production";
    response.cookies.set({
      name: "asan_user_id",
      value: user._id.toString(),
      httpOnly: true,
      secure: isProd, // only secure in prod
      sameSite: isProd ? "none" : "lax", // Chrome blocks "none" on HTTP
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    response.cookies.set({
      name: "asan_user_role",
      value: user.role,
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Internal server error: ${(err as Error).message}`
            : "Internal server error",
      },
      { status: 500 }
    );
  }
}
