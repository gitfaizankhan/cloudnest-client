import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">📂 My Drive</h1>

      {/* Content area */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Welcome to <span className="font-semibold">My Drive</span>. Your files
          & folders will appear here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
