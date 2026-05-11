import axios, { AxiosError } from 'axios';
import sendToken from './middlewares/send-token.middleware';
import handleErrors from './middlewares/handle-errors';

function api(url: string) {
    const api = axios.create({baseURL: url});

    api.interceptors.request.use(
        (request) => sendToken(request),
        (error: AxiosError) => handleErrors(error),
    );

    api.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => handleErrors(error),
    );

    return api;
}

export default api;