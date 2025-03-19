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

const deleteUser = async (userId: string) => {
  try {
    return await User.deleteOne({ userId });
  } catch (error: any) {
    console.error("Error deleting user:", error.message);
    throw new Error(error.message || "Could not delete user");
  }
};

const updateUser = async (
  userId: string,
  data: { name: string; email: string }
) => {
  try {
    return await User.updateOne({ userId }, data);
  } catch (error: any) {
    console.error("Error updating user:", error.message);
    throw new Error(error.message || "Could not update user");
  }
};

export { getAllUsers, createUser, deleteUser, updateUser };
