import axios from "axios";

const baseUrl = 'https://bloodbank.veldev.com/api';

axios.create({
    baseURL:baseUrl,
})