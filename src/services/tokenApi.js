import axios from 'axios';
// import { refreshTokenThunk } from 'redux/auth/auth.thunk';

//let store;

export const injectStore = _store => {
  //store = _store;
};

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

// TODO: remove comments

// privateApi.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     //console.log('Refresh', originalRequest._retry);
//     if (
//       (error.response.status === 401 || error.response.status === 400) &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       // const data = await refreshTokenService(
//       //   selectRefreshToken(store.getState()),
//       //   selectTokenSid(store.getState())
//       // );

//       // console.log(data);
//       await store.dispatch(refreshTokenThunk());

//       return privateApi(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );
