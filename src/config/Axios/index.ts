import axios, { AxiosError, type AxiosInstance, type AxiosResponse } from "axios";
import dataHandler from "./dataHandler";
import errorHandler from "./errorHandler";

const Axios: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_URL_SERVER}/api/v1` as string,
});

Axios.interceptors.response.use(
    (response: AxiosResponse) => dataHandler(response),
    (error: AxiosError) => {
        errorHandler(error);
        return { error };
    }
);

export const setAuthToken = (token: string | null): void => {
    if (token) {
        Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete Axios.defaults.headers.common.Authorization;
    }
};

export default Axios;
