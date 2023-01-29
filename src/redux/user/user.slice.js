import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk } from 'redux/auth/auth.thunk';
import { userInitialState } from './user.initial';
import { addUserBalanceThunk, getUserInfoThunk } from './user.thunk';
import { Status } from 'constants';
import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';
import {
  addExpenseThunk,
  addIncomeThunk,
} from 'redux/transactions/transactions.thunk';
import { deleteTransactionThunk } from '../transactions/transactions.thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      // When success login set user data
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.userData.balance;
        state.email = payload.userData.email;
        state.transactions = payload.userData.transactions;
      })
      .addCase(logoutThunk.fulfilled, () => userInitialState)
      .addCase(logoutThunk.rejected, () => userInitialState)
      .addCase(getUserInfoThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.email = payload.email;
        state.transactions = payload.transactions;
      })
      .addCase(addUserBalanceThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(addExpenseThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(addIncomeThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      .addMatcher(isActionPending(userSlice.name), state => {
        state.status = Status.PENDING;
        state.error = null;
      })
      .addMatcher(isActionFulfilled(userSlice.name), state => {
        state.status = Status.FULFILLED;
      })
      .addMatcher(isActionRejected(userSlice.name), (state, { payload }) => {
        state.status = Status.REJECTED;
        state.error = payload.message;
      });
  },
});

export const userReducer = userSlice.reducer;
