import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { cookies } from "next/headers";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);


// Get all hiring requests with pagination
export async function GET(req: Request) {
  try {
    // Check user role from cookies
    const cookieStore = cookies();
    const userRole = cookieStore.get('asan_user_role')?.value;
    const userId = cookieStore.get('asan_user_id')?.value;
    
    // Only admin users can access the hiring requests list
    if (userRole !== 'admin') {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
    }
    
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    
    const skip = (page - 1) * limit;
    
    await client.connect();
    const db = client.db();
    const collection = db.collection("hiringRequests");
    
    // Log the access to hiring requests list
    await db.collection("auditLogs").insertOne({
      action: "hiring_requests_access",
      userId,
      userRole,
      filters: { search, status, page, limit },
      timestamp: new Date(),
      ipAddress: req.headers.get("x-forwarded-for") || "unknown"
    });
    
    // Build query
    const query: any = {};
    
    if (search) {
      query.$or = [
        { "details.name": { $regex: search, $options: "i" } },
        { "details.email": { $regex: search, $options: "i" } },
        { "details.phone": { $regex: search, $options: "i" } },
        { "details.eventType": { $regex: search, $options: "i" } }
      ];
    }
    
    if (status) {
      query.status = status;
    }
    
    // Get total count for pagination
    const total = await collection.countDocuments(query);
    
    // Get hiring requests with pagination
    const hiringRequests = await collection.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    return NextResponse.json({
      hiringRequests,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error("Fetch hiring requests error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(request: Request) {
  try {
    const hiringForm = await request.json();
    console.log("Received hiringForm:", hiringForm);

    // Validate required nested fields
    const requiredDetailFields = [
      "name",
      "email",
      "phone",
      "eventType",
      "location",
    ];

    for (const field of requiredDetailFields) {
      if (
        !hiringForm.details[field] ||
        (typeof hiringForm.details[field] === "string" &&
          hiringForm.details[field].trim() === "")
      ) {
        return NextResponse.json(
          { error: `Missing or empty field: details.${field}` },
          { status: 400 }
        );
      }
    }

    // Validate at least one eventTime with eventDate/startTime/endTime
    if (
      !Array.isArray(hiringForm.details.eventTimes) ||
      hiringForm.details.eventTimes.length === 0 ||
      !hiringForm.details.eventTimes[0].eventDate
    ) {
      return NextResponse.json(
        { error: "Missing or invalid eventTimes" },
        { status: 400 }
      );
    }

    // You can also validate requiredServices if needed (example for videoCategory)
    if (!hiringForm.requiredServices.videography.videoCategory?.id) {
      return NextResponse.json(
        { error: "Missing videography.videoCategory" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db();
    const collection = db.collection("hiringRequests");

    const result = await collection.insertOne({
      ...hiringForm,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Hiring form submitted successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Hiring form failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
