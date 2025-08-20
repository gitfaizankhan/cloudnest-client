import React, { useState } from "react";
import GoogleIcon from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../utils/axiosClient"; // Axios instance
import apis from "../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.post(apis().loginUser, {
        email,
        password,
      });

      console.log("Login Success:", response.data);

      // You may want to store user in localStorage or context
      // localStorage.setItem("user", JSON.stringify(response.data.data.user));

      alert("Login successful!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-slate-500 text-sm font-bold">Sign in with</h6>
              </div>
              <div className="btn-wrapper text-center">
                <button className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150">
                  <img alt="Google" className="w-5 mr-1" src={GoogleIcon} />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-slate-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-slate-400 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>

              {/* FORM START */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              {/* FORM END */}

              <div className="flex justify-between items-center mt-4 text-sm">
                <Link
                  to="/auth/forgot-password"
                  className="text-slate-500 hover:text-slate-700 transition font-semibold"
                >
                  Forgot password?
                </Link>
                <Link
                  to="/auth/register"
                  className="text-slate-500 hover:text-slate-700 transition font-semibold"
                >
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
