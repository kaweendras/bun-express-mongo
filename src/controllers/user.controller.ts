import { Request, Response } from "express";
import UserService from "../services/user.service";

const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

const createUser = async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};

export default { getUsers, createUser };
