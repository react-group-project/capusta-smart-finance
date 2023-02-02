import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Status } from 'constants';
import { isActionRejected } from 'helpers';
import { authInitialState } from './auth.initial';
import { loginThunk, logoutThunk, registrationThunk } from './auth.thunk';
import { refreshTokenThunk } from 'redux/auth/auth.thunk';

const isAuthError = action => action?.payload?.status === 401;

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isAuthorized = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(refreshTokenThunk.pending, state => {
        state.statuses.refreshToken = Status.PENDING;
      })
      .addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isAuthorized = true;
        state.statuses.refreshToken = Status.FULFILLED;
      })
      .addCase(refreshTokenThunk.rejected, () => authInitialState)
      // Registration
      .addCase(registrationThunk.pending, state => {
        state.statuses.registration = Status.PENDING;
        state.errors.registration = null;
      })
      .addCase(registrationThunk.fulfilled, state => {
        state.statuses.registration = Status.FULFILLED;
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.statuses.registration = Status.REJECTED;
        state.errors.registration = payload?.message;
      })
      // Login
      .addCase(loginThunk.pending, state => {
        state.statuses.login = Status.PENDING;
        state.errors.login = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isAuthorized = true;
        state.statuses.login = Status.FULFILLED;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.statuses.login = Status.REJECTED;
        state.errors.login = payload?.message;
      })
      // Logout
      .addCase(logoutThunk.pending, state => {
        state.statuses.logout = Status.PENDING;
        state.errors.logout = null;
      })
      .addCase(logoutThunk.fulfilled, () => authInitialState)
      .addCase(logoutThunk.rejected, () => authInitialState)
      // Matches
      .addMatcher(isActionRejected('user', isAuthError), () => authInitialState)
      .addMatcher(
        isActionRejected('transactions', isAuthError),
        () => authInitialState
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'sid'],
};

export const { addToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
