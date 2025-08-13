import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Register from "../components/Register";
import Login from "../components/login";
import ForgotPassword from "../components/ForgotPassord";
import OTPVerification from "../components/OTPVerification";
import ResetPassword from "../components/ResetPassword";

const AuthLayout = () => (
  <main>
    <section className="relative w-full h-screen">
      <div className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"></div>
      <Outlet />
    </section>
  </main>
);

const Auth = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp-verification" element={<OTPVerification />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default Auth;
