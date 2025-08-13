import React from "react";

const Profile = () => {
  return (
    <div className="p-6 bg-slate-100 h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">👤 Profile</h1>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow p-6 text-slate-700">
        <p>
          Manage your <span className="font-semibold">account information</span>
          , update your details, and personalize your CloudNest profile here.
        </p>
      </div>
    </div>
  );
};

export default Profile;
