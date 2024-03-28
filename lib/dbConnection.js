import mongoose from "mongoose";

export default async function dbConnection() {
  let isConnected = false;
  try {
    if (isConnected) {
      console.log("already mongodb is connected");
    } else {
      await mongoose.connect(process.env.MONGODB_URL);
      isConnected = true;
    }
  } catch (err) {
    throw new Error("connection problem with mongdb");
  }
}
