import axiosClient from "@/api/axiosClient";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as object | null,
        isLoading: false,
        error: null as string | null,
    }),

    actions:{
        async login(){
            await axiosClient.post('/login', {
                username: 'test',
                password: 'test'
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