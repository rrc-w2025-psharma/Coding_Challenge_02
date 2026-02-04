import express, { Express, Request, Response } from "express";
import eventRoutes from "../api/v1/routes/eventRoutes";

// Initialize Express application
const app: Express = express();

app.use(express.json());

// Define a route
app.get("/api/v1/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

app.use("/api/v1", eventRoutes);

export default app;