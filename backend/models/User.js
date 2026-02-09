// backend/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  personalId: { type: String, required: true, unique: true }, // <-- Add this
});

export default mongoose.model("User", UserSchema);
