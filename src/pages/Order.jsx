import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

export default function Orders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    };
    fetchOrders();
  }, [token]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-4 rounded">
            <p><span className="font-semibold">Order ID:</span> {order._id}</p>
            <p><span className="font-semibold">Total:</span> ${order.totalPrice.toFixed(2)}</p>
            <p><span className="font-semibold">Status:</span> {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}
