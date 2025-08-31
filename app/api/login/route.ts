import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // ✅

export async function POST(req: Request) {
  try {
    const { userType, userId, operatorId, password } = await req.json();
    if (!password) {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("staff");

    let user = null;
    if (userType === "admin") {
      user = await collection.findOne({ userId, role: "admin" });
    } else {
      user = await collection.findOne({ operatorId, role: "operator" });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
