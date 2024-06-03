import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://macgyver-express-backend.onrender.com/api/',
  timeout: 10000, // Increase timeout to 10 seconds
});
