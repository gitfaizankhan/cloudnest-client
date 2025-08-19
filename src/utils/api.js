// src/utils/api.js
const apis = () => ({
  loginUser: "auth/login",
  registerUser: "auth/register",
  logout: "auth/logout",
  getMe: "auth/me",
  forgotPassword: "auth/forgot-password",
  resetPassword: "auth/reset-password",
});

export default apis;
