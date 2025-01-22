import { defineComponent, ref } from "vue";
import { handleLogin as loginService } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { jwtDecode } from "jwt-decode";

export default defineComponent({
  name: "Login",
  setup() {
    // State management
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const email = ref<string>("");
    const password = ref<string>("");

    // Function untuk menangani login
    const handleLogin = async () => {
      const authStore = useAuthStore(); // Mengakses store auth

      try {
        isLoading.value = true;
        error.value = null;

        // Validasi input
        if (!email.value || !password.value) {
          throw new Error("Email dan password harus diisi.");
        }

        // Panggil login service
        const response = await loginService({
          email: email.value,
          password: password.value,
        });

        if (response?.token) {
          console.log("Login berhasil", response);

          // Decode token
          const token: { role: string; user_id: number } = jwtDecode(response.token);

          // Simpan data ke store
          authStore.setAuth({
            user_id: token.user_id || null,
            token: response.token,
            role: token.role || "user",
            isAuth: true,
          });

          return response;
        } else {
          throw new Error("Login gagal. Token tidak tersedia.");
        }
      } catch (err: any) {
        error.value =
          err?.response?.data?.message || err.message || "Terjadi kesalahan";
        console.error("Login error:", err);
      } finally {
        isLoading.value = false;
      }
    };

    // Return state dan function untuk digunakan di template
    return {
      email,
      password,
      isLoading,
      error,
      handleLogin,
    };
  },
});
