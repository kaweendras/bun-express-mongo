import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import errorMiddleware from "./middlewares/error.middleware";
import { serve, setup } from "./config/swagger";
import connectDB from "./config/db.config";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api-docs", serve, setup);

app.use("/api/users", userRoutes);
app.use(errorMiddleware);

// start app
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
