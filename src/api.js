import axios from 'axios';

const api = axios.create({
    baseURL: 'https://syscoinapi.herokuapp.com/provasyscoin?'
});

export default api;