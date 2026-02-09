import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-[#F2F0EB] min-h-screen py-16 px-4 md:px-16 lg:px-24">
      
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold italic text-[#2C2F33] mb-12 text-center"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Info Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 flex flex-col md:flex-row gap-12 justify-around"
      >
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold italic text-[#B85C38] mb-4">Contact Info</h2>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-2">📍 123 NexTek Street, Lagos, Nigeria</p>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-2">📞 +234 800 123 4567</p>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-2">✉️ info@nextekstore.com</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-bold italic text-[#2C2F33] mb-4">Follow Us</h2>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-1">🐦 Twitter: @NexTekStore</p>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-1">📘 Facebook: NexTekStore</p>
          <p className="text-[#2C2F33] text-lg md:text-xl mb-1">📸 Instagram: @NexTekStore</p>
        </div>
      </motion.section>

      {/* Dummy Email Collection / Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold italic text-[#2C2F33] mb-6 text-center">Join Our Newsletter</h2>
        <p className="text-[#2C2F33] text-lg md:text-xl mb-6 text-center">
          Subscribe to receive updates, promotions, and new product launches from NexTek.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B85C38] text-lg"
          />
          <button
            type="submit"
            className="bg-[#B85C38] hover:bg-[#2C2F33] text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
          >
            Subscribe
          </button>
        </form>
      </motion.section>
    </div>
  );
}
