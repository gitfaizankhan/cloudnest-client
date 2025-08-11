import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  // Handle OTP input
  const handleChange = (element, index) => {
    if (!/^[0-9]?$/.test(element.value)) return; // only allow numbers
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to next box
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      // TODO — Call API to verify OTP
      alert(`Entered OTP: ${enteredOtp}`);
      navigate("/auth/reset-password");
    }
  };

  // Check if all 6 digits are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
            {/* Header */}
            <div className="rounded-t mb-0 px-6 py-6 text-center">
              <h6 className="text-slate-500 text-sm font-bold">
                OTP Verification
              </h6>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Enter the 6-digit OTP sent to your email address.
              </p>
            </div>

            {/* Body */}
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* OTP Inputs */}
                <div className="flex justify-between">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      className="w-12 h-12 text-center text-xl font-semibold border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                  ))}
                </div>

                {/* Verify Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    disabled={!isOtpComplete}
                    className={`text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none w-full ease-linear transition-all duration-150
                      ${
                        isOtpComplete
                          ? "bg-slate-800 text-white hover:shadow-lg active:bg-slate-600"
                          : "bg-slate-400 text-slate-200 cursor-not-allowed"
                      }`}
                  >
                    Verify OTP
                  </button>
                </div>

                {/* Resend / Back */}
                <div className="text-center mt-4 text-sm">
                  <p className="text-slate-500">
                    Didn’t receive the OTP?{" "}
                    <button
                      type="button"
                      onClick={() => alert("Resend OTP triggered")}
                      className="text-slate-700 font-semibold hover:underline"
                    >
                      Resend
                    </button>
                  </p>
                  <p className="mt-2">
                    <Link
                      to="/auth/login"
                      className="text-slate-500 hover:underline"
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

export default OTPVerification;
