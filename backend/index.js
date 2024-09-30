import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies (must be before routes)
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Dev Sharma");
});

// Routes (should be after express.json middleware)
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port ", PORT);
});
