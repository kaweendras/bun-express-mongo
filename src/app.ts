import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import errorMiddleware from "./middlewares/error.middleware";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorMiddleware);

export default app;
