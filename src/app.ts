import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import errorMiddleware from "./middlewares/error.middleware";
import { serve, setup } from "./config/swagger";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api-docs", serve, setup);

app.use("/api/users", userRoutes);
app.use(errorMiddleware);

export default app;
