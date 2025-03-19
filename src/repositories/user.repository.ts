import User from "../models/user.model";
import crypto from "crypto";

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    throw new Error(error.message || "Could not fetch users");
  }
};

const createUser = async (data: { name: string; email: string }) => {
  //get current timestamp
  const timestamp = Date.now().toString(36);
  const hashedId = crypto.createHash("sha256").update(timestamp).digest("hex");
  const saveData = { userId: hashedId, ...data };
  try {
    return await User.create(saveData);
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message || "Could not create user");
  }
};

export { getAllUsers, createUser };
