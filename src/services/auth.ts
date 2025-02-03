import Swal from "sweetalert2";
import ApiAuth from "../config/endpoint/auth";

interface LoginValues {
    email: string;
    password: string;
}

interface RegisterValues {
    email: string;
    username: string;
    password: string;
    role: string;
}

interface CustomError {
    message: string;
    response?: {
        data: {
            message: string;
        };
    };
}

export const handleLogin = async ({ email, password }: LoginValues) => {
    try {
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        const body = JSON.stringify({ email, password });
        const response = await ApiAuth.Login(body, config);
        return response?.data || {};
    } catch (error) {
        const axiosError = error as CustomError; // Cast error ke AxiosError
        Swal.fire({
            icon: "error",
            title: "Login error",
            text: axiosError?.response?.data?.message || "Something went wrong",
        });
        console.error("Login error:", axiosError);
    }
};

export const handleRegister = async ({ email, password, role, username }: RegisterValues) => {
    try {
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        const body = JSON.stringify({
            email,
            password,
            role,
            username,
        });
        const response = await ApiAuth.Register(body, config);
        return response.data || {};
    } catch (error) {
        const axiosError = error as CustomError; // Cast error ke AxiosError
        Swal.fire({
            icon: "error",
            title: "Register error",
            text: axiosError?.response?.data?.message || "Something went wrong",
        });
        console.error("Register error:", axiosError);
    }
};