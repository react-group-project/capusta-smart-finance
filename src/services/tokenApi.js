import axios from 'axios';

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const privateApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const token = {
  set(tokenValue) {
    privateApi.defaults.headers.Authorization = tokenValue;
  },
  unset() {
    privateApi.defaults.headers.Authorization = null;
  },
};
