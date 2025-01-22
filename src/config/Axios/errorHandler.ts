import type { AxiosError } from 'axios'
import Swal from "sweetalert2";

const errorHandler = (error: AxiosError): void => {
    if (!error) return;

    let message : string | undefined;
    if (error.response) {
        const { statusCode, message: responseMessage } = error.response
            .data as {
            statusCode: number;
            message: string;
        };

        switch (statusCode) {
            case 400:
                console.log("responseMessage", responseMessage);
                break;
            case 401: // Unauthorized
                console.log("401 Unauthorized:", responseMessage);

                // Pastikan SweetAlert2 hanya dipanggil di sisi klien
                if (typeof window !== "undefined") {
                    Swal.fire({
                        title: "Sesi anda telah berakhir. Silahkan login kembali",
                        icon: "warning",
                        showConfirmButton: false,
                        timer: 2000,
                    }).then(() => {
                        localStorage.removeItem("auth");
                        window.location.replace("/login");
                    });
                }
                break;
            case 403:
                console.log("responseMessage", responseMessage);
                break;
            case 500:
                message = "Something went terribly wrong";
                break;
            default:
                message = error.message;
                break;
        }

        if (typeof message === "string") console.log("message", message);
    }
};

export default errorHandler;

