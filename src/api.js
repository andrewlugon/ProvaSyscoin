import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:3000/provasyscoin?'
});

export default api;