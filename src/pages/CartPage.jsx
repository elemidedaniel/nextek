// import { useCart } from "../context/CartContext";
// import { motion } from "framer-motion";

// export default function CartPage() {
//   const { cart, removeFromCart, total } = useCart();

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-[#2C2F33]">
//         Your cart is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#F2F0EB] min-h-screen py-16 px-4 md:px-12">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl md:text-6xl font-extrabold text-[#2C2F33] mb-12 text-center"
//       >
//         Your Cart
//       </motion.h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cart.map((item) => (
//           <motion.div
//             key={item.id}
//             whileHover={{ scale: 1.02 }}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-64 object-cover"
//             />

//             <div className="p-4 flex flex-col flex-1">
//               <h3 className="text-lg font-bold text-[#2C2F33] truncate">
//                 {item.name}
//               </h3>

//               <p className="text-[#B85C38] font-semibold text-lg mt-1">
//                 ${item.price.toFixed(2)} × {item.quantity}
//               </p>

//               <p className="text-[#2C2F33] font-medium mt-2">
//                 Subtotal: ${(item.price * item.quantity).toFixed(2)}
//               </p>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="mt-4 w-full bg-[#B85C38] hover:bg-[#2C2F33] text-white font-bold py-2 rounded-lg transition-colors"
//               >
//                 Remove Product
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="mt-12 text-right text-2xl font-bold text-[#2C2F33]">
//         Total: ${total.toFixed(2)}
//       </div>
//     </div>
//   );
// }


import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";



export default function CartPage() {
  const {
    cart,
    total,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

if (cart.length === 0) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src="/empty-cart.svg"
        alt="Empty cart"
        className="w-64 mb-6 opacity-80"
      />

      <h2 className="text-2xl font-bold text-[#2C2F33] mb-2">
        Your cart is empty
      </h2>

      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything yet.
      </p>

      <NavLink
        to="/products"
        className="px-6 py-3 bg-[#B85C38] text-white rounded-lg hover:bg-[#2C2F33] transition"
      >
        Browse Products
      </NavLink>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 md:px-12 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 md:mb-12 text-center"
      >
        Shopping Cart
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {cart.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row md:gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-32 md:h-32 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-[#B85C38] font-semibold mt-1">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 rounded-full border hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-2 rounded-full border hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="font-semibold text-gray-900 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </motion.div>
        ))}

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center mt-10">
          <p className="text-xl font-bold text-gray-900">
            Total: ${total.toFixed(2)}
          </p>

          {/* 🔥 STEP 2 — CHECKOUT BUTTON */}
          <NavLink
            to="/checkout"
            className="mt-4 md:mt-0 bg-[#B85C38] hover:bg-[#2C2F33] text-white px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
}
