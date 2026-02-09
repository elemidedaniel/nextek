import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Optional: validate password strength
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      await register(name, email, password);
      navigate("/"); // redirect to home
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 border rounded"
          required
        />
        <p className="text-gray-500 text-sm mb-4">
          Password must be at least 6 characters.
        </p>

        <label className="block mb-2 font-medium">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#B85C38] text-white p-3 rounded hover:bg-[#2C2F33] transition-colors"
        >
          Sign Up
        </button>
        <p className="text-center mt-4 text-sm text-gray-600 cursor-pointer">
          Already have an account? <a href="/login" className="text-[#B85C38] hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}
