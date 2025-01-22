import Swal from "sweetalert2";
import ApiAuth from "../config/endpoint/auth";

interface LoginValues {
    email: string;
    password: string;
}

interface RegisterValues {
    email: string;
    password: string;
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
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Login error",
            text: error?.response?.data?.message || "Something went wrong",
        });
        return console.error("Login error:", error);
    }
};

export const handleRegister = async ({ email, password }: RegisterValues) => {
    try {
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        const body = JSON.stringify({
            email,
            password,
        });
        const response = await ApiAuth.Register(body, config);
        return response.data || {};
    } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Register error",
            text: error?.response?.data?.message || "Something went wrong",
        });
        return console.error("Login error:", error);
    }
};
