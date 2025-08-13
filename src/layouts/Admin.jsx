import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Uploads from "../components/Uploads";
import Shared from "../components/Shared";
import Favorites from "../components/Favorites";
import Recent from "../components/Recent";
import Trash from "../components/Trash";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import Settings from "../components/Settings";
import HeaderStats from "../components/HeaderStats";
import AdminNavbar from "../components/AdminNavbar";
import FooterAdmin from "../components/FooterAdmin";

function Admin() {
  return (
    <>
      <Sidebar />
      {/* Content Area */}
      <div className="relative md:ml-64 bg-slate-800 text-white h-screen flex flex-col">
        <AdminNavbar />
        <HeaderStats />

        {/* Main Routes */}
        <div className="flex-1 px-4 md:px-10 mx-auto m-24 w-full overflow-y-auto">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="shared" element={<Shared />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="recent" element={<Recent />} />
            <Route path="trash" element={<Trash />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Routes>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
}

export default Admin;
