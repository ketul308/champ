import { useState } from "react";
import { UserType } from "./type";
import { getUserProfile, login } from "../../../api/auth/authApi";

export function useHomeScreen() {

    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const signIn = async (email: string, password: string) => {
        setLoading(true);
        try {
            const data = await login(email, password);
            setUser(data.user);
        } catch (error) {
            console.error("Login Failed:", error);
        }
        setLoading(false);
    };

    const fetchUserProfile = async () => {
        setLoading(true);
        try {
            const data = await getUserProfile();
            setUser(data);
        } catch (error) {
            console.error("Failed to fetch profile:", error);
        }
        setLoading(false);
    };

    return {
        signIn,
        fetchUserProfile,
        user,
        loading,
    }

}