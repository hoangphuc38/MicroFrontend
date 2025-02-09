import axios from "axios";

const API_BASE_URL = "https://7a14-125-235-233-43.ngrok-free.app/api"; // URL gốc của API

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor để log request & response (Giúp debug dễ dàng hơn)
axiosInstance.interceptors.request.use(
    (config) => {
        console.log("Request gửi đi:", config);
        return config;
    },
    (error) => {
        console.error("Lỗi request:", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response nhận được:", response);
        return response;
    },
    (error) => {
        console.error("Lỗi response:", error.response ? error.response.data : error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
