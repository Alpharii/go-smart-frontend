import Axios from "../Axios";

export default {
    Login: (body: string, config: object) =>
        Axios.post("/auth/login", body, config),
    Register: (body: string, config: object) =>
        Axios.post("/auth/register", body, config),
};
