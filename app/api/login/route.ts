// app/api/login/route.ts
import { NextResponse } from "next/server";
import clientPromise, { verifyConnection } from "@/lib/mongodb";
import { compare } from "bcrypt";

export async function POST(req: Request) {
  try {
    const { userType, userId, operatorId, password } = await req.json();

    // 1️⃣ Validate inputs
    if (!password) return NextResponse.json({ error: "Password required" }, { status: 400 });
    if (userType !== "admin" && userType !== "operator") return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
    if (userType === "admin" && !userId) return NextResponse.json({ error: "Admin ID required" }, { status: 400 });
    if (userType === "operator" && !operatorId) return NextResponse.json({ error: "Operator ID required" }, { status: 400 });

    // 2️⃣ Verify database connection
    const isConnected = await verifyConnection();
    if (!isConnected) return NextResponse.json({ error: "Database connection error" }, { status: 500 });

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("staff");

    // 3️⃣ Find the user
    const user = userType === "admin"
      ? await collection.findOne({ userId, role: "admin" })
      : await collection.findOne({ operatorId, role: "operator" });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 401 });
    if (user.status === "inactive") return NextResponse.json({ error: "Account inactive" }, { status: 403 });

    // 4️⃣ Check password (supports both bcrypt and plain text)
    let passwordMatch = false;
    if (user.password?.startsWith("$2")) {
      // bcrypt hash
      passwordMatch = await compare(password, user.password);
    } else {
      // plain text
      passwordMatch = user.password?.trim() === password.trim();
    }

    if (!passwordMatch) return NextResponse.json({ error: "Invalid password" }, { status: 401 });

    // 5️⃣ Update last login timestamp
    await collection.updateOne({ _id: user._id }, { $set: { lastLogin: new Date() } });

    // 6️⃣ Return JSON response
    const response = NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status || "active",
    });



    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
