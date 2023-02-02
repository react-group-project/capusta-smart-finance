import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Status } from 'constants';
import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';
import { authInitialState } from './auth.initial';
import { loginThunk, logoutThunk } from './auth.thunk';
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
        state.isRefreshing = true;
      })
      .addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isAuthorized = true;
        state.isRefreshing = false;
      })
      .addCase(refreshTokenThunk.rejected, () => authInitialState)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isAuthorized = true;
      })
      .addCase(logoutThunk.fulfilled, () => authInitialState)
      .addCase(logoutThunk.rejected, () => authInitialState)
      .addMatcher(isActionPending(authSlice.name), state => {
        state.status = Status.PENDING;
        state.error = null;
      })
      .addMatcher(isActionFulfilled(authSlice.name), state => {
        state.status = Status.FULFILLED;
      })
      .addMatcher(isActionRejected(authSlice.name), (state, { payload }) => {
        state.error = payload?.message;
        state.status = Status.REJECTED;
        state.isRefreshing = false;
      })
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
