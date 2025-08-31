import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { cookies } from 'next/headers';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

// Get all job applications with pagination
export async function GET(req: Request) {
  try {
    // Check user role from cookies
    const cookieStore = cookies();
    const userRole = cookieStore.get('asan_user_role')?.value;
    const userId = cookieStore.get('asan_user_id')?.value;
    
    // Only admin users can access the job applications list
    if (userRole !== 'admin') {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
    }
    
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const role = searchParams.get("role") || "";
    
    const skip = (page - 1) * limit;
    
    await client.connect();
    const db = client.db();
    const collection = db.collection('joinUsApplicants');
    
    // Log the access to job applications list
    await db.collection("auditLogs").insertOne({
      action: "job_applications_access",
      userId,
      userRole,
      filters: { search, role, page, limit },
      timestamp: new Date(),
      ipAddress: req.headers.get("x-forwarded-for") || "unknown"
    });
    
    // Build query
    const query: any = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } }
      ];
    }
    
    if (role) {
      query.role = role;
    }
    
    // Get total count for pagination
    const total = await collection.countDocuments(query);
    
    // Get job applications with pagination
    const applications = await collection.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    return NextResponse.json({
      applications,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    console.error("Fetch job applications error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const requiredFields = [ 
      'name',
      'email',
      'phone',
      'age', // Added
      'gender', // Added
      'role',
      'experience',
      // 'portfolio',
      'location',
      'availability',
      'expectedSalary',
      'resumeLink', // Added
      'agree', // Added
      'message',
      // 'skills',
      'pincode', // Added
      'district', // Added
      'state', // Added
      'country' // Added
    ];

    // ✅ Validate required fields
    for (const field of requiredFields) {
      const value = formData[field];
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '') ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return NextResponse.json({ error: `Missing or empty field: ${field}` }, { status: 400 });
      }
    }

    await client.connect();
    const db = client.db();
    const collection = db.collection('joinUsApplicants');

    const result = await collection.insertOne({
      ...formData,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Application submitted', id: result.insertedId }, { status: 201 });

  } catch (err) {
    console.error('Error saving application:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}