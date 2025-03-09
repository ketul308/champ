import axios from "axios";
import { apiConfig } from "../config/apiConfig";

// Define base API URL
const api = axios.create({
    baseURL: apiConfig.BASE_URL, // Replace with actual API URL
    timeout: 10000, // Timeout in ms
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor (Attach Auth Token if available)
api.interceptors.request.use(
    (config) => {
        const token = "your-auth-token"; // Replace with actual token logic
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (Handle API Errors)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;
