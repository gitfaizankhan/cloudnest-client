import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // <-- React Router

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Call backend API to send OTP to this email
    console.log(`Sending OTP to: ${email}`);

    // After API success, navigate to OTP page
    navigate("/auth/otp-verification", { state: { email } });
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6 text-center">
              <h6 className="text-slate-500 text-sm font-bold">
                Forgot your password?
              </h6>
              <p className="text-slate-400 text-xs mt-2">
                Enter your registered email to get a 6-digit OTP.
              </p>
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 
                               bg-white rounded text-sm shadow focus:outline-none focus:ring 
                               w-full ease-linear transition-all duration-150"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold 
                               uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                               focus:outline-none w-full ease-linear transition-all duration-150"
                  >
                    Send OTP
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

export default ForgotPassword;
