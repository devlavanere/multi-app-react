// services/apiService.js
import axios from 'axios';
import { getNewToken } from './authService';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// Interceptor para renovar o token automaticamente
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await getNewToken();
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
