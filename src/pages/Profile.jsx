import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null; // Shouldn't happen due to ProtectedRoute

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex justify-center items-start pt-24 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Personal ID:</span>
            <span>{user.personalId}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-[#B85C38] hover:bg-[#2C2F33] text-white py-3 rounded-xl transition-colors cursor-pointer font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
