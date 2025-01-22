

// src/api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',  // Remplace par l'URL de ton serveur backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
