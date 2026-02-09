// src/components/Navigation.jsx
import { NavLink } from "react-router-dom";
import { ShoppingCart, UserRound, Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navigation() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const linkStyle =
    "relative px-2 py-1 font-medium transition-all duration-300";

  const navLinks = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#B85C38] cursor-pointer"
        >
          NexTek
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  `${linkStyle} ${
                    isActive
                      ? "text-[#B85C38] font-semibold"
                      : "hover:text-[#B85C38]"
                  }`
                }
              >
                {link}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">

          {/* Cart with badge */}
          <NavLink to="/cart" className="relative">
            <ShoppingCart size={26} className="hover:text-[#B85C38]" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B85C38] text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* Profile Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="hover:text-[#B85C38]"
              >
                <UserRound size={26} />
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl border p-2"
                  >
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                      onClick={() => setProfileOpen(false)}
                    >
                      Profile
                    </NavLink>

                    <NavLink
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                      onClick={() => setProfileOpen(false)}
                    >
                      Orders
                    </NavLink>

                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg text-left"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-md border border-[#B85C38] text-[#B85C38] hover:bg-[#B85C38] hover:text-white transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="px-4 py-2 rounded-md bg-[#B85C38] text-white hover:bg-[#2C2F33] transition"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#0F172A]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden backdrop-blur-md bg-white/80 border-t"
          >
            <ul className="flex flex-col items-center space-y-6 py-6">

              {navLinks.map((link) => (
                <NavLink
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-[#B85C38]"
                >
                  {link}
                </NavLink>
              ))}

              <NavLink
                to="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <ShoppingCart size={22} />
                Cart ({cart.length})
              </NavLink>

              {user ? (
                <>
                  <NavLink to="/profile" onClick={() => setOpen(false)}>
                    Profile
                  </NavLink>
                  <button onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <NavLink to="/login" onClick={() => setOpen(false)}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" onClick={() => setOpen(false)}>
                    Sign Up
                  </NavLink>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

