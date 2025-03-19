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

export default { getAllUsers, createUser };
