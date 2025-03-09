
import api from "../Interceptor";
import { LoginResponse } from "./type";

// Login API Call
export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await api.post<LoginResponse>("/auth/login", { email, password });
        return response.data;
    } catch (error: any) {
        throw error?.response?.data || error?.message;
    }
};

// Fetch User Profile
export const getUserProfile = async (): Promise<LoginResponse["user"]> => {
    try {
        const response = await api.get<LoginResponse["user"]>("/auth/profile");
        return response.data;
    } catch (error: any) {
        throw error?.response?.data || error?.message;
    }
};
