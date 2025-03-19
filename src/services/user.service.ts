import * as UserRepository from "../repositories/user.repository";
const getAllUsers = async () => {
  const result = await UserRepository.getAllUsers();
  return result;
};

const createUser = async (data: { name: string; email: string }) => {
  //validate data
  if (!data.name || !data.email) {
    return null;
  }
  const result = await UserRepository.createUser(data);
  return result;
};

const deleteUser = async (userId: string) => {
  //validate user id
  if (!userId) {
    return null;
  }
  const result = await UserRepository.deleteUser(userId);
  return result;
};

const updateUser = async (
  userId: string,
  data: { name: string; email: string }
) => {
  //validate user id
  if (!userId) {
    return null;
  }
  const result = await UserRepository.updateUser(userId, data);
  return result;
};

export default { getAllUsers, createUser, updateUser, deleteUser };
