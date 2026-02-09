import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">NexTek</h2>
          <p className="text-sm leading-relaxed">
            Premium workspace gadgets designed to improve productivity,
            comfort, and modern desk aesthetics.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-medium mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-white">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/orders" className="hover:text-white">My Orders</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/profile" className="hover:text-white">Profile</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-medium mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>help@nextek.com</li>
            <li>+234 800 000 0000</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700 text-center py-6 text-sm text-slate-400">
        © {new Date().getFullYear()} NexTek. All rights reserved.
      </div>
    </footer>
  );
}
