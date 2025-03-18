import { Request, Response } from "express";
import UserService from "../services/user.service";

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    if (!users || users.length === 0) {
      return res
        .status(users.length === 0 ? 204 : 404)
        .json({ message: "No users found" });
    }
    res.json(users);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUser(req.body);

    if (!user) {
      return res.status(400).json({ message: "Invalid input" });
    }
    res.status(201).json(user);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export default { getUsers, createUser };
