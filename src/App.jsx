import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./layouts/Auth";
import Admin from "./layouts/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="auth/login" replace />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
