import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; 
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // Get the cookie store
    const cookieStore = cookies();
    const userRole = cookieStore.get('asan_user_role')?.value;
    const userId = cookieStore.get('asan_user_id')?.value;
    
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("staff");

    const user = await collection.findOne({ _id: new ObjectId(params.id) });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // Check if the requesting user has permission to access this user data
    // Only admins can access other users' data, operators can only access their own
    if (userRole !== 'admin' && userId !== params.id) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
    }
    
    // Log access to user data
    await db.collection("auditLogs").insertOne({
      action: "user_data_access",
      accessedUserId: params.id,
      accessedByUserId: userId,
      accessedByRole: userRole,
      timestamp: new Date(),
      ipAddress: request.headers.get("x-forwarded-for") || "unknown"
    });

    // Return different data based on role
    if (userRole === 'admin') {
      return NextResponse.json({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status || "active",
        location: user.location,
        lastLogin: user.lastLogin,
        permissions: user.permissions || [],
        createdAt: user.createdAt
      });
    } else {
      // Limited data for non-admin users
      return NextResponse.json({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status || "active"
      });
    }
  } catch (err) {
    console.error("Fetch user error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
