import { defineStore } from "pinia";
import { ref } from "vue";

export interface AuthState {
  user_id: number | null;
  token: string;
  role: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  user_id: null,
  token: "",
  role: "user",
  isAuth: false,
};

export const useAuthStore = defineStore("auth", () => {
  const auth = ref<AuthState>({ ...initialState });

  // Actions
  const setAuth = (payload: AuthState) => {
    auth.value = { ...payload };
    localStorage.setItem("auth", JSON.stringify(payload));
  };

  const removeAuth = () => {
    auth.value = { ...initialState };
    localStorage.removeItem("auth");
  };

  // Persist state on initialization (optional)
  const initAuth = () => {
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      auth.value = JSON.parse(savedAuth);
    }
  };

  // Call initialization function when the store is created
  initAuth();

  return {
    auth,
    setAuth,
    removeAuth,
  };
});
