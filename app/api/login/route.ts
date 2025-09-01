import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
    const { userType, userId, operatorId, password } = await req.json()

    if (!password) {
      return NextResponse.json(
        { error: "Password required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db()
    const collection = db.collection("staff")

    // 🔹 Build query based on userType
    let query: any = { role: userType }

    if (userType === "admin") {
      query.username = userId // must match your DB schema
    } else {
      query.operatorId = operatorId // adjust if DB uses another field
    }

    console.log("Login query:", query)

    // 🔹 Find user
    const user = await collection.findOne(query)

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 401 }
      )
    }

    // 🔹 Plain-text password check (⚠️ you should hash in production)
    if (user.password !== password) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      )
    }

    // ✅ Success (force `_id` to string so it works on Vercel)
    return NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    })
  } catch (err) {
    console.error("Login error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
