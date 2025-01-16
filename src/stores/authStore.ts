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
            
        }
    }
});