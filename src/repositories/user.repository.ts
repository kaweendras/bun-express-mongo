import User from "../models/user.model";

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }
};

const createUser = async (data: { name: string; email: string }) => {
  try {
    return await User.create(data);
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Could not create user");
  }
};

export { getAllUsers, createUser };
