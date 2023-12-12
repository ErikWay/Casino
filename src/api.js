// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Замените на свой бэкенд URL


export const getGames = () => axios.get(`${API_URL}/games`);
export const addGame = (game) => axios.post(`${API_URL}/games`, game);
