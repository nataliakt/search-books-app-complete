import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/nataliakt/search-books-app'
});

export default api;
