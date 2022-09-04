import mongoose from "mongoose";

global.mongo = global.mongo || {};
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://asne:qij5oymbPtcpvwAM@cluster0.9v1kbmj.mongodb.net/asne?retryWrites=true&w=majority";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {};

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
