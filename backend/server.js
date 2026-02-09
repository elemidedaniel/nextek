import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js"; 
import cartRoutes from "./routes/CartRoutes.js"; // ✅ Import cart routes
// import orderRoutes from "./routes/orders.js"; // Later

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// ✅ Register routes
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes); // ✅ Cart route

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
