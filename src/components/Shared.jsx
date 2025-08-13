import React from "react";

const Shared = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        🤝 Shared with Me
      </h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Files and folders that have been{" "}
          <span className="font-semibold">shared with you</span> will appear
          here.
        </p>
      </div>
    </div>
  );
};

export default Shared;
