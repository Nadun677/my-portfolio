import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// ✅ Extend global type to include mongoose cache
declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// ✅ Use globalThis to avoid type errors
const globalWithMongoose = global as typeof globalThis & {
  mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = { conn: null, promise: null };
}

async function dbConnect() {
  if (globalWithMongoose.mongooseCache.conn) {
    return globalWithMongoose.mongooseCache.conn;
  }

  if (!globalWithMongoose.mongooseCache.promise) {
    mongoose.set('strictQuery', true); // Optional for Mongoose v7+
    globalWithMongoose.mongooseCache.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  globalWithMongoose.mongooseCache.conn = await globalWithMongoose.mongooseCache.promise;
  return globalWithMongoose.mongooseCache.conn;
}

export default dbConnect;
