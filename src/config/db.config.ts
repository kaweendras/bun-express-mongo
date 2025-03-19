import mongoose from "mongoose";

const connectDB = async () => {
  try {
    process.stdout.write("📦 Connecting to MongoDB");
    const interval = setInterval(() => {
      process.stdout.write(".");
    }, 1000);
    await mongoose.connect(process.env.MONGO_URI!);
    process.stdout.write("\n");
    clearInterval(interval);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error", error);
    // process.exit(1);
  }
};

export default connectDB;
