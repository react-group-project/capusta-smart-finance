import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'constants';
import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';
import { authInitialState } from './auth.initial';
import { loginThunk, logoutThunk } from './auth.thunk';

// QUESTION: спитат про 400 error code
const isAuthError = action => action?.payload?.status === 401;

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
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
        state.error = payload.message;
        state.status = Status.REJECTED;
      })
      .addMatcher(isActionRejected('user', isAuthError), () => authInitialState)
      .addMatcher(
        isActionRejected('transactions', isAuthError),
        () => authInitialState
      );
  },
});

export const authReducer = authSlice.reducer;
