import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./layouts/Auth";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}

export default App;
