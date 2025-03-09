export interface LoginResponse {
    user: {
        id: string;
        name: string;
        email: string;
        token: string;
    };
}

export interface LoginRequest {
    email: string;
    password: string;
}