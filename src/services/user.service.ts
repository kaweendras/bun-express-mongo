import User from "../models/user.model";

const getAllUsers = async () => {
  return await User.find();
};

const createUser = async (data: { name: string; email: string }) => {
  return await User.create(data);
};

export default { getAllUsers, createUser };
