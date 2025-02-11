import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { handleRegister as registerService } from "@/services/auth";
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
  name: "Register",
  setup() {
    const router = useRouter();
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);
    const username = ref<string>("");
    const email = ref<string>("");
    const password = ref<string>("");

    const handleRegister = async () => {
      try {
        isLoading.value = true;
        error.value = null;

        // Validasi input
        if (!username.value || !email.value || !password.value) {
          throw new Error("Semua field harus diisi.");
        }

        // Simulasi API call untuk register
        const response = await registerService({
          email: email.value,
          username: username.value,
          password: password.value,
          role: "user"
        })

        console.log("Register response:", response);

        if (response?.message === "User created successfully") {
          Swal.fire({
            icon: "success",
            title: "Registrasi berhasil",
            text: "Silakan login ke akun Anda.",
          }).then(() => {
            router.push("/login");
          });
        } else {
          throw new Error("Gagal mendaftar. Silakan coba lagi.");
        }
      } catch (err) {
        let errorMessage = "Terjadi kesalahan";

        if (isCustomError(err)) {
          errorMessage =
            err.response?.data?.message || err.message || "Terjadi kesalahan";
        }

        error.value = errorMessage;
        console.error("Register error:", err);
      } finally {
        isLoading.value = false;
      }
    };
  
    return {
      username,
      email,
      password,
      isLoading,
      error,
      handleRegister,
    };
  },
});