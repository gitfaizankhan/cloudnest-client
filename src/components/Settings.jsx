import React from "react";

const Settings = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">⚙ Settings</h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Customize your <span className="font-semibold">CloudNest</span>{" "}
          experience here. Manage application preferences, privacy options, and
          other settings.
        </p>
      </div>
    </div>
  );
};

export default Settings;
