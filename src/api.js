import axios from 'axios';

const api = axios.create({
    baseURL: 'https://syscoinapi.herokuapp.com/'
});

export default api;