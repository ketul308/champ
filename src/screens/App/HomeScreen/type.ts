import { ReactNode } from "react";

export interface AuthContextType {
    user: UserType | null;
    signIn: (email: string, password: string) => Promise<void>;
    loading: boolean;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface UserType {
    id: string;
    name: string;
    email: string;
    token: string;
}