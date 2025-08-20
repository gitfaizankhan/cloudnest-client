import React, { useState, useRef, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 
import axiosInstance from "../utils/axiosClient"; 
import apis from "../utils/api";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch user from backend (/auth/me)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(apis().getMe); 
        setUser(response.data.data.user); // ApiResponse: { data: { user } }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    try {
      await axiosInstance.post(apis().logout, {}, { withCredentials: true });
      navigate("/auth/login"); // ✅ redirect to login after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shadow-md focus:outline-none"
      >
        <FiUser size={20} className="text-gray-600" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg py-3 px-4 z-50">
          {/* User info */}
          <div className="border-b border-gray-200 pb-3 mb-3">
            <p className="text-sm font-medium text-gray-900">
              {user?.user_metadata?.display_name || user?.full_name || "Guest User"}
            </p>
            <p className="text-xs text-gray-500">
              {user?.email || "guest@example.com"}
            </p>
          </div>

          {/* Actions */}
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-2 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
