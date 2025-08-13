import React from "react";

const Uploads = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">📤 Uploads</h1>

      {/* Page Content */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          This is your <span className="font-semibold">Uploads</span> section.
          Files you’ve uploaded will appear here.
        </p>
      </div>
    </div>
  );
};

export default Uploads;
