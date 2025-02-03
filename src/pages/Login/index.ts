import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { handleLogin as loginService } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

interface CustomError {
  message: string;
  response?: {
      data: {
          message: string;
      };
  };
}

function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as CustomError).message === "string"
  );
}

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter(); // Inisialisasi router
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const email = ref<string>("");
    const password = ref<string>("");

    const handleLogin = async () => {
      const authStore = useAuthStore();
      try {
        isLoading.value = true;
        error.value = null;

        if (!email.value || !password.value) {
          throw new Error("Email dan password harus diisi.");
        }

        const response = await loginService({
          email: email.value,
          password: password.value,
        });

        if (response?.token) {
          console.log("Login berhasil", response);

          const token: { role: string; user_id: number } = jwtDecode(response.token);

          authStore.setAuth({
            user_id: token.user_id || null,
            token: response.token,
            role: token.role || "user",
            isAuth: true,
          });

          Swal.fire({
            icon: "success",
            title: "Login berhasil",
            text: "Selamat datang di aplikasi!",
          }).then(() => {
            // Redirect ke '/' setelah pengguna menutup SweetAlert
            router.push("/"); // Redirect menggunakan Vue Router
          });

          return response;
        } else {
          throw new Error("Login gagal. Token tidak tersedia.");
        }
      } catch (err) {
        let errorMessage = "Terjadi kesalahan";
      
        if (isCustomError(err)) {
          errorMessage =
            err.response?.data?.message || err.message || "Terjadi kesalahan";
        }
      
        error.value = errorMessage;
        console.error("Login error:", err);
      }
      finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      isLoading,
      error,
      handleLogin,
    };
  },
});