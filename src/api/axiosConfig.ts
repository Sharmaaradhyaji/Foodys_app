import axios from 'axios';
import { store } from '../store';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3000/api', 
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
