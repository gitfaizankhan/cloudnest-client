import React, { useState, useRef, useEffect } from "react";
import userAvatar from "../assets/google.svg";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center focus:outline-none"
      >
        <img
          src={userAvatar}
          alt="User avatar"
          className="w-12 h-12 rounded-full border-none shadow-lg"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 z-50">
          <button
            onClick={() => alert("Action clicked")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Action
          </button>
          <button
            onClick={() => alert("Another action clicked")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Another action
          </button>
          <button
            onClick={() => alert("Something else clicked")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Something else here
          </button>
          <div className="border-t my-2 border-gray-200" />
          <button
            onClick={() => alert("Separated link clicked")}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Separated link
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
