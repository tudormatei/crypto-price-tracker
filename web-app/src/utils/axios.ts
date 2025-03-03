import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.coincap.io/v2/",
  headers: { Accept: "application/json" },
});

export default axiosInstance;
