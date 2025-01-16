import axiosClient from "@/api/axiosClient";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: "",
        user: null as object | null,
        isLoading: false,
        error: null as string | null,
    }),

    actions:{
        async login(email: string, password: string) {
            await axiosClient.post('/login', {
                email: email,
                password: password
            }).then((response) => {
                this.token = response.data.token;
                this.user = response.data.user;
                this.isLoading = false;
                this.error = null;
                localStorage.setItem('token', this.token);
                });
        }
    }
});