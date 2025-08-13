import React from "react";

const Trash = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">🗑 Trash</h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Files and folders you’ve moved to{" "}
          <span className="font-semibold">Trash</span> will appear here. Items
          in Trash will be permanently deleted after a certain time.
        </p>
      </div>
    </div>
  );
};

export default Trash;
