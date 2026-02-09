import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: Number,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
});

export default mongoose.model("Cart", CartSchema);
