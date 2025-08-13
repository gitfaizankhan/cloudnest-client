import React from "react";

const Favorites = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">⭐ Favorites</h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Your <span className="font-semibold">favorite</span> files and folders
          will be displayed here for quick access.
        </p>
      </div>
    </div>
  );
};

export default Favorites;
