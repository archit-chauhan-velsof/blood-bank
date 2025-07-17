import axios from "axios";

import {token,itemsPerPage} from '../config'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  params:{
    'pagination[pageSize]': itemsPerPage
  }
});

export const axiosInstanceWithoutToken = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});