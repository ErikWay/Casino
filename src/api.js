// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

// В каждом вызове axios добавьте withCredentials: true
export const getGames = () => axios.get(`${API_URL}/games`, { withCredentials: true });
export const addGame = (game) => axios.post(`${API_URL}/games`, game, { withCredentials: true });
export const register = (userData) => axios.post(`${API_URL}/register`, userData, { withCredentials: true });
export const login = (userData) => axios.post(`${API_URL}/login`, userData, { withCredentials: true });
export const checkAuthStatus = () => axios.get(`${API_URL}/check-auth`, { withCredentials: true });
export const logoutAcc = () => axios.post(`${API_URL}/logout`, {}, { withCredentials: true });