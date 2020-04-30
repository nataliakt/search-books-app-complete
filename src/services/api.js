import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/nataliakt/search-books-app'
});

export default api;
