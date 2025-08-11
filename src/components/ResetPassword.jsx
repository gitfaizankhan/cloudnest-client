import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // TODO: Call backend API to update the password
    console.log("Password reset successful");

    alert("Your password has been reset successfully!");

    // Redirect to Login
    navigate("/auth/login");
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
            {/* Header */}
            <div className="rounded-t mb-0 px-6 py-6 text-center">
              <h6 className="text-slate-500 text-sm font-bold">
                Reset Your Password
              </h6>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Please enter your new password below.
              </p>
            </div>

            {/* Body */}
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* New Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  >
                    New Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 
                               bg-white rounded text-sm shadow focus:outline-none focus:ring 
                               w-full ease-linear transition-all duration-150"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 
                               bg-white rounded text-sm shadow focus:outline-none focus:ring 
                               w-full ease-linear transition-all duration-150"
                  />
                </div>

                {/* Reset Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-slate-800 text-white active:bg-slate-600 
                               text-sm font-bold uppercase px-6 py-3 rounded 
                               shadow hover:shadow-lg outline-none focus:outline-none 
                               w-full ease-linear transition-all duration-150"
                  >
                    Reset Password
                  </button>
                </div>

                {/* Back to Login */}
                <div className="text-center mt-4">
                  <p className="text-sm text-slate-500">
                    Remembered your password?{" "}
                    <Link
                      to="/auth/login"
                      className="text-slate-700 font-semibold hover:underline"
                    >
                      Back to Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
