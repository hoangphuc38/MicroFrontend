import axios from 'axios';

let token = localStorage.getItem("token");

const axiosClient = axios.create({
    baseURL: 'https://deb5-125-235-233-43.ngrok-free.app/api/',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning':  '69420',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    //Handle token here
    if (token && config.headers) {
        config.headers.Authorization = token;
        return config;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    if (error.response.status === 400) {
        return Promise.reject(error);
    }
    //Handle errors;
    throw error;
})

export default axiosClient;