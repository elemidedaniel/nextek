import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function ProductDetailPage() {
  const { state: product } = useLocation();
  const { addToCart } = useCart();
  const { user } = useAuth();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F2F0EB] min-h-screen py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12"
      >
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-3xl shadow-2xl w-full md:w-4/5"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#2C2F33]">
            {product.name}
          </h1>

          <p className="text-[#B85C38] font-bold text-2xl md:text-3xl">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-[#2C2F33] text-lg leading-relaxed">
            This is a full detailed description of {product.name}. Crafted with
            premium materials, designed for performance, comfort, and style.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["High Quality", "Ergonomic Design", "Fast Shipping", "Modern Style"].map((feat) => (
              <div
                key={feat}
                className="bg-[#D9CAB3] p-4 rounded-xl shadow-md text-center"
              >
                <p className="font-bold text-[#2C2F33]">{feat}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                if (!user) {
                  alert("Please login or sign up to add products to cart.");
                  return;
                }
                addToCart(product);
              }}
              className="px-4 md:px-8 py-2 md:py-4 bg-[#B85C38] text-[#F2F0EB] font-bold rounded-lg hover:bg-[#2C2F33] transition-colors duration-300 shadow-lg"
            >
              Add to Cart
            </button>

            <button className="px-4 md:px-8 py-2 md:py-4 border-2 border-[#B85C38] text-[#2C2F33] font-bold rounded-lg hover:bg-[#B85C38] hover:text-[#F2F0EB] transition-colors duration-300">
              Buy Now
            </button>
          </div>

          {/* Back Link */}
          <Link
            to="/products"
            className="text-[#2C2F33] mt-6 inline-block font-bold hover:underline"
          >
            ← Back to Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
