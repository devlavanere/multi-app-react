// services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('refreshToken', response.data.refreshToken);
};

export const getNewToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await axios.post(`${API_URL}/refresh-token`, { refreshToken });
  localStorage.setItem('token', response.data.token);
  return response.data.token;
};
