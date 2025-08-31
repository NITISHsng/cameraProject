// lib/mongodb.ts
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!(global as any)._mongoClientPromise) {
  client = new MongoClient(uri);
  (global as any)._mongoClientPromise = client.connect()
    .catch(err => {
      console.error('Failed to connect to MongoDB:', err);
      throw err;
    });
}

clientPromise = (global as any)._mongoClientPromise;

// Helper function to verify connection before operations
export async function verifyConnection() {
  try {
    const client = await clientPromise;
    await client.db().command({ ping: 1 });
    return true;
  } catch (error) {
    console.error('MongoDB connection verification failed:', error);
    return false;
  }
}

export default clientPromise;
