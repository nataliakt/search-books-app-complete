import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: API_KEY
  }
});

export default api;
