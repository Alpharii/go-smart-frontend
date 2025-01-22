import Axios from "../Axios";

export default {
    Login: (body: string, config: object) =>
        Axios.post("/login", body, config),
    Register: (body: string, config: object) =>
        Axios.post("/register", body, config),
};
