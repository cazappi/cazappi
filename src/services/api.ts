import axios from "axios";
import { getToken } from '../utils/get-cookie';

const url = "https://api-agcqapi5sa-uw.a.run.app/api";

const api = axios.create({
  //baseURL: url ?? "http://localhost:3333/api",
  baseURL: url, // "http://localhost:3333/api",
  // baseURL: "http://172.19.6.83:3333/api",
  //withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Lista de rotas que não precisam de token
const publicRoutes = [
    '/auth/login',
    '/auth/register',
    // Adicione outras rotas públicas aqui
];

// Interceptor para adicionar o token nas requisições
api.interceptors.request.use(
    (config) => {
        const isPublicRoute = publicRoutes.some(route => config.url?.includes(route));
        
        if (!isPublicRoute) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
