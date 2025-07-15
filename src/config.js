import axios from "axios";

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDcsImlhdCI6MTc1MjU1NzAxNywiZXhwIjoxNzU1MTQ5MDE3fQ.Br8_2peNBUGn2iEPxic9V78xRgkO_KHCEVzNjAHnx7E';


export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});