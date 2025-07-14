import axios from "axios";

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUyMjM4NzU1LCJleHAiOjE3NTQ4MzA3NTV9.93nJksEbCpHozBkRnJYyQ8hIX4GMIlVvSl8o50o5QWw';


export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});