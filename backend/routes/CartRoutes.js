import express from "express";
import Cart from "../models/Cart.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// GET user cart
router.get("/:userId", protect, async (req, res) => {
  try {
    const cartDoc = await Cart.findOne({ userId: req.params.userId });
    res.json({ cart: cartDoc ? cartDoc.cart : [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE user cart
router.put("/:userId", protect, async (req, res) => {
  try {
    const { cart } = req.body;

    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      { cart },
      { upsert: true, new: true }
    );

    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
