import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com/api/domains',
});

export default api;