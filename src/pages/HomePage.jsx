import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

// Images
import heroImage from "../assets/images/hero.jpeg";
import product8 from "../assets/images/product8.jpeg";
import product16 from "../assets/images/product16.jpeg";
import product11 from "../assets/images/product11.jpeg";
import product5 from "../assets/images/product5.jpeg";
import product18 from "../assets/images/product18.jpeg";
import product6 from "../assets/images/product6.jpeg";
import nextek1 from "../assets/images/nextek1.png";
import nextek2 from "../assets/images/nextek2.jpeg";
import nextek3 from "../assets/images/nextek3.jpeg";
import nextek4 from "../assets/images/nextek4.jpeg";

export default function HomePage() {
  const { addToCart } = useCart();
  const { user } = useAuth();

  /* ---------------- FEATURED PRODUCTS ---------------- */
  const featuredProducts = [
    { id: 5, name: "Mechanical Keyboard", price: 49.99, image: product5, rating: 4 },
    { id: 16, name: "Ergonomic Office Chair", price: 199.99, image: product16, rating: 4 },
    { id: 11, name: "Wooden Top Double Layer Desk", price: 299.99, image: product11, rating: 5 },
    { id: 8, name: "JBL Charge 5", price: 99.99, image: product8, rating: 4 },
    { id: 18, name: "Mouse Pad", price: 19.99, image: product18, rating: 5 },
    { id: 6, name: "Wireless Power Bank", price: 49.99, image: product6, rating: 5 },
  ];

  /* ---------------- WHY CHOOSE NEXTEK ---------------- */
  const whyChooseNextek = [
    {
      id: 3,
      title: "Fast & Reliable Delivery",
      description:
        "Quick order processing, secure packaging, and dependable shipping every time.",
      image: nextek1,
    },
    {
      id: 1,
      title: "Designed for Productivity",
      description:
        "Every product is ergonomically designed to improve posture, reduce fatigue, and boost focus.",
      image: nextek2,
    },
    {
      id: 2,
      title: "Seamless Tech Integration",
      description:
        "Compatible with modern devices, wireless standards, and smart workspace setups.",
      image: nextek3,
    },
    {
      id: 0,
      title: "Premium Build Quality",
      description:
        "Built using high-grade materials with attention to durability, comfort, and long-term performance.",
      image: nextek4,
    },
  ];

  /* ---------------- SCROLL + AUTO STATE ---------------- */
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  // Scroll-sync (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto progress
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === whyChooseNextek.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [whyChooseNextek.length]);

  /* ---------------- PRODUCT CARD ---------------- */
  const renderProducts = (products) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 p-2">
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ y: -6, scale: 1.02 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-40 md:h-48 lg:h-56 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-lg text-[#2C2F33]">
              {product.name}
            </h3>
            <p className="font-bold text-[#B85C38] text-xl mt-1">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex gap-1 mt-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>

            <button
              onClick={() => {
                if (!user) {
                  alert("Please login to add products to cart.");
                  return;
                }
                addToCart(product);
              }}
              className="mt-auto bg-black text-white py-2 rounded-xl font-semibold hover:bg-[#2C2F33] transition"
            >
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#F2F0EB] min-h-screen font-sans">

      {/* ---------------- HERO ---------------- */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:py-20 md:py-14 py-10 px-4">
        <div className="md:w-1/2 space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-extrabold text-[#2C2F33] leading-tight"
          >
            Upgrade Your <br /> Workspace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[#1B1D1F] text-lg md:text-xl"
          >
            Premium tech accessories designed for comfort, style, and performance.
          </motion.p>

          <div className="flex gap-6">
            <NavLink to="products" className="px-6 py-3 bg-[#B85C38] text-white font-bold rounded-lg cursor-pointer">
              Shop Now
            </NavLink>
            <NavLink to="about" className="px-6 py-3 border-2 border-[#B85C38] rounded-lg font-bold">
              Learn More
            </NavLink>
          </div>
        </div>

        <motion.img
          src={heroImage}
          alt="Hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:w-1/2 rounded-3xl shadow-2xl"
        />
      </section>

      {/* ---------------- BEST SELLERS ---------------- */}
      <section className="container mx-auto py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#2C2F33]">
          Best Sellers
        </h2>
        {renderProducts(featuredProducts)}
      </section>

      {/* ---------------- WHY CHOOSE NEXTEK ---------------- */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32 space-y-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C2F33]">
              Why Choose NexTek
            </h2>

            <ul className="space-y-10">
              {whyChooseNextek.map((item, index) => (
                <li
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`pl-6 border-l-4 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#B85C38] text-[#2C2F33]"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="mt-2 max-w-md">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="relative h-[420px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={whyChooseNextek[activeIndex].image}
                alt=""
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
