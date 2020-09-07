import axios from 'axios';
import { getToken } from '../store/LocalStorage/LocalStorage';

const apiToken = getToken() || '';

export default axios.create({
  baseURL: 'http://18.141.32.144/',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    language: 'English',
    Authorization: `Bearer ${apiToken}`,
  },
});
