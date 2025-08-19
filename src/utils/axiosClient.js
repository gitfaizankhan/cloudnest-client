// src/api/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1", // backend base URL
  withCredentials: true, // send cookies automatically if needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
