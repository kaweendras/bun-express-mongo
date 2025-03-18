import User from "../models/user.model";

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    throw new Error(error.message || "Could not fetch users");
  }
};

const createUser = async (data: { name: string; email: string }) => {
  try {
    return await User.create(data);
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message || "Could not create user");
  }
};

export { getAllUsers, createUser };
