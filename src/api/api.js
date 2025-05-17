import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // .env se URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken'); // Token localStorage se lenge
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;