import { createServer } from "http";
import app from "./app";
import connectDB from "./config/db.config";

const PORT = process.env.PORT || 3000;
const server = createServer(app);

server.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
