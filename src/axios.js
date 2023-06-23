import axios from "axios";

const instance = axios.create({
    baseURL: 'https://blog-back-7kpg.onrender.com',
}); 

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance;