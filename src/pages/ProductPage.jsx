import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext.jsx";


import product1 from "../assets/images/product1.jpeg";
import product2 from "../assets/images/product2.jpeg";
import product3 from "../assets/images/product3.jpeg";
import product4 from "../assets/images/product4.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product6 from "../assets/images/product6.jpeg";
import product7 from "../assets/images/product7.jpeg";
import product8 from "../assets/images/product8.jpeg";
import product9 from "../assets/images/product9.jpeg";
import product21 from "../assets/images/product21.jpeg";
import product11 from "../assets/images/product11.jpeg";
import product12 from "../assets/images/product12.jpeg";
import product13 from "../assets/images/product13.jpeg";
import product16 from "../assets/images/product16.jpeg";
import product18 from "../assets/images/product18.jpeg";
import workspace1 from "../assets/images/workspace1.jpeg";
import workspace2 from "../assets/images/workspace2.jpeg";
import workspace3 from "../assets/images/workspace3.jpeg";

const ImageSkeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 ${className}`} />
);

export default function ProductPage() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loadedImages, setLoadedImages] = useState({});
  const markLoaded = (key) =>
    setLoadedImages((p) => ({ ...p, [key]: true }));

if (!user) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-[#2C2F33] mb-3">
        Please log in
      </h2>

      <p className="text-gray-500 mb-6">
        You need an account to access your cart.
      </p>

      <NavLink
        to="/login"
        className="px-6 py-3 bg-[#B85C38] text-white rounded-lg hover:bg-[#2C2F33] transition"
      >
        Login to Continue
      </NavLink>
    </div>
  );
}


  /* ---------------- PRODUCTS ---------------- */
  const newArrivals = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 49.99,
      image: product1,
      rating: 4,
    },
    {
      id: 2,
      name: "Studio Monitor Speakers (Pair)",
      price: 249.99,
      image: product2,
      rating: 5,
    },
    {
      id: 3,
      name: "Apple Airpods Max",
      price: 299.99,
      image: product3,
      rating: 3,
    },
    { id: 4, name: "AirPods Pro", price: 119.99, image: product4, rating: 4 },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 49.99,
      image: product5,
      rating: 4,
    },
  ];

  const bestSellers = [
    {
      id: 6,
      name: "Wireless Power Bank",
      price: 49.99,
      image: product6,
      rating: 5,
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 79.99,
      image: product7,
      rating: 5,
    },
    { id: 8, name: "JBL Charge 5", price: 99.99, image: product8, rating: 4 },
    { id: 9, name: "Mac Mini", price: 599.99, image: product9, rating: 4 },
    {
      id: 16,
      name: "Ergonomic Office Chair",
      price: 199.99,
      image: product16,
      rating: 4,
    },
  ];

  const topRated = [
    { id: 21, name: "4K Webcam", price: 39.99, image: product21, rating: 4 },
    {
      id: 11,
      name: "Wooden Top Double Layer Desk",
      price: 299.99,
      image: product11,
      rating: 5,
    },
    {
      id: 12,
      name: "Wooden Top L Shape Desk",
      price: 249.99,
      image: product12,
      rating: 4,
    },
    {
      id: 13,
      name: "Wireless Mouse",
      price: 39.99,
      image: product13,
      rating: 4,
    },
    { id: 18, name: "Mouse Pad", price: 19.99, image: product18, rating: 5 },
  ];

  /* ---------------- WORKSPACES ---------------- */
  const workspaces = [
    {
      id: 1,
      title: "Premium Minimal Workspace",
      image: workspace1,
      items: [
        { name: "27-inch 4K Monitor", price: 329.99 },
        { name: "Ultrabook Laptop", price: 999.99 },
        { name: "Wireless Keyboard", price: 89.99 },
        { name: "Wireless Precision Mouse", price: 59.99 },
        { name: "XL Desk Mat", price: 29.99 },
        { name: "Bookshelf Speakers (Pair)", price: 149.99 },
        { name: "Adjustable LED Desk Lamp", price: 45.99 },
        { name: "Ergonomic Mesh Office Chair", price: 279.99 },
        { name: "Solid Wood Workstation Desk", price: 399.99 },
        { name: "Minimal Wall Clock", price: 39.99 },
      ],
    },

    {
      id: 2,
      title: "Ultrawide Productivity Workspace",
      image: workspace2,
      items: [
        { name: "34-inch Ultrawide Monitor", price: 499.99 },
        { name: "Monitor Light Bar", price: 89.99 },
        { name: "Ultrabook Laptop", price: 1099.99 },
        { name: "Aluminum Laptop Stand", price: 59.99 },
        { name: "Wireless Keyboard", price: 99.99 },
        { name: "Wireless Precision Mouse", price: 69.99 },
        { name: "Extended Desk Mat", price: 34.99 },
        { name: "USB-C Docking Station", price: 149.99 },
        { name: "Wireless Charging Pad", price: 39.99 },
        { name: "Smart Speaker", price: 129.99 },
        { name: "Noise Cancelling Headphones", price: 249.99 },
        { name: "Ergonomic Office Chair", price: 299.99 },
        { name: "Minimal Wood Office Desk", price: 399.99 },
        { name: "Monitor Riser Shelf", price: 79.99 },
      ],
    },
    {
      id: 4,
      title: "Modern Creator Workspace",
      image: workspace3,
      items: [
        { name: '34" Ultrawide Monitor', price: 699.99 },
        { name: "Monitor Light Bar", price: 39.99 },
        { name: "1080p Webcam", price: 79.99 },
        { name: "Tablet with Keyboard Case", price: 499.99 },
        { name: "Mechanical Keyboard", price: 129.99 },
        { name: "Wireless Mouse", price: 59.99 },
        { name: "Extended Desk Mat", price: 29.99 },
        { name: "Studio Monitor Speakers (Pair)", price: 249.99 },
        { name: "Smart Display (Echo Show–style)", price: 89.99 },
        { name: "Over-Ear Headphones", price: 179.99 },
        { name: "Headphone Stand", price: 19.99 },
        { name: "Smartphone Dock / Charger", price: 24.99 },
        { name: "LED Ambient Backlight Strip", price: 24.99 },
        { name: "Monitor Arm", price: 69.99 },
        { name: "Minimal Office Desk", price: 299.99 },
      ],
    },
  ];

  /* ---------------- WORKSPACE STATE ---------------- */
  const [index, setIndex] = useState(
    () => Number(localStorage.getItem("workspaceIndex")) || 0,
  );
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const workspace = workspaces[index];
  const total = workspace.items.reduce((sum, item) => sum + item.price, 0);

  const next = () => setIndex((i) => (i + 1) % workspaces.length);
  const prev = () => setIndex((i) => (i === 0 ? workspaces.length - 1 : i - 1));

  /* ---------------- AUTO ROTATE ---------------- */
  useEffect(() => {
    localStorage.setItem("workspaceIndex", index);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused]);



  /* ---------------- PRODUCT GRID ---------------- */
  const renderSection = (title, products) => (
    <section className="mb-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -6 }}
            onClick={() =>
              navigate(`/products/${product.id}`, { state: product })
            }
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col cursor-pointer"
          >
            <img src={product.image} className="h-40 md:h-48 lg:h-56 w-full object-cover" />
            <div className="p-2 md:p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-md md:text-lg">{product.name}</h3>
              <p className="text-md md:text-xl font-semibold">${product.price.toFixed(2)}</p>
              <div className="flex gap-1 mt-2 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!user) {
                    alert("Please login or sign up to add products to cart.");
                    return;
                  }
                  addToCart(product);
                }}
                className="w-full bg-black text-white py-2 rounded-lg mt-auto cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  /* ---------------- PAGE ---------------- */
  return (
    <div className="bg-[#f5f5f7] min-h-screen py-16 px-4 md:px-12">
      {/* WORKSPACE CAROUSEL */}
      <div
        className="max-w-6xl mx-auto mb-28 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta > 60) prev();
          if (delta < -60) next();
        }}
      >
        {/* NAV BUTTONS */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow hover:scale-105 transition"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur p-3 rounded-full shadow hover:scale-105 transition"
        >
          <ChevronRight size={22} />
        </button>

        {/* WORKSPACE CONTENT */}
        <motion.div
          key={workspace.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[32px] shadow-xl overflow-hidden grid md:grid-cols-2"
        >
          <img src={workspace.image} className="w-full object-cover h-full" />

          <div className="p-10">
            <h3 className="text-2xl font-semibold mb-6">{workspace.title}</h3>

            <div className="space-y-3 mb-6">
              {workspace.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <p className="text-3xl font-semibold mb-6">${total.toFixed(2)}</p>

            <button
              onClick={() => {
                if (!user) {
                  alert("Please login or sign up to add workspace to cart.");
                  return;
                }
                addToCart({
                  id: 900 + workspace.id,
                  name: workspace.title,
                  price: total,
                  image: workspace.image,
                });
              }}
              className="bg-black text-white w-full py-3 rounded-xl cursor-pointer"
            >
              Add Workspace to Cart
            </button>

            {/* PROGRESS INDICATOR */}
            <div className="flex gap-2 mt-4 justify-center">
              {workspaces.map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-1 rounded-full transition-all ${
                    i === index ? "bg-[#B85C38]" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* PRODUCT GRIDS */}
      {renderSection("New Arrivals", newArrivals)}
      {renderSection("Best Sellers", bestSellers)}
      {renderSection("Top Rated", topRated)}
    </div>
  );
}
