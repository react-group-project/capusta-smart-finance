import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'constants';
import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';
import { logoutThunk } from 'redux/auth/auth.thunk';
import { transactionsInitialState } from './transactions.initial';
import {
  getAllTransactionsThunk,
  getExpensesCategoriesThunk,
  getExpenseThunk,
  getIncomesCategoriesThunk,
  getIncomeThunk,
  getPeriodDataThunk,
} from './transactions.thunk';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getExpensesCategoriesThunk.fulfilled, (state, { payload }) => {
        state.expenses.categories = payload;
      })
      .addCase(getIncomesCategoriesThunk.fulfilled, (state, { payload }) => {
        state.incomes.categories = payload;
      })
      .addCase(getExpenseThunk.fulfilled, (state, { payload }) => {
        state.expenses = { ...state.expenses, payload };
      })
      .addCase(getIncomeThunk.fulfilled, (state, { payload }) => {
        state.incomes = { ...state.incomes, payload };
      })
      .addCase(getAllTransactionsThunk.fulfilled, (state, { payload }) => {
        state.incomes = { ...state.incomes, payload };
        state.expenses = { ...state.expenses, payload };
      })
      .addCase(getPeriodDataThunk.fulfilled, (state, { payload }) => {
        state.period = payload;
      })
      // TODO: додати очищення після помилки 401
      .addCase(logoutThunk.fulfilled, () => transactionsInitialState)
      .addMatcher(isActionPending(transactionsSlice.name), state => {
        state.status = Status.PENDING;
        state.error = null;
      })
      .addMatcher(isActionFulfilled(transactionsSlice.name), state => {
        state.status = Status.FULFILLED;
      })
      .addMatcher(
        isActionRejected(transactionsSlice.name),
        (state, { payload }) => {
          state.status = Status.REJECTED;
          state.error = payload?.message;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
