import React, { useState } from "react";
import GoogleIcon from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../utils/axiosClient"; // Axios instance
import apis from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("You must agree to the Privacy Policy");
      return;
    }

    try {
      const response = await axiosClient.post(apis().registerUser, {
        email,
        password,
        full_name: fullName,
      });

      console.log("Registration Success:", response.data);
      alert("Account created successfully!");
      navigate("/auth/login"); // Redirect to login page
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-slate-500 text-sm font-bold">
                  Sign up with
                </h6>
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
                <small>Or sign up with credentials</small>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    <span className="ml-2 text-sm font-semibold text-slate-600">
                      I agree with the{" "}
                      <a
                        href="#pablo"
                        className="text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
