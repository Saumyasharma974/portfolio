// server.js
import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db.js";
import userRoute from './userRoutes.js'

dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDb()
// Routes
app.use('/api/users',userRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
