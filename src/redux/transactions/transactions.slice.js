import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'constants';
import { isActionFulfilled, isActionPending, isActionRejected } from 'helpers';
import { transactionsInitialState } from './transactions.initial';
import {
  getAllTransactionsThunk,
  getExpenseThunk,
  getIncomeThunk,
} from './transactions.thunk';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getExpenseThunk.fulfilled, (state, { payload }) => {
        state.expenses = payload;
      })
      .addCase(getIncomeThunk.fulfilled, (state, { payload }) => {
        state.incomes = payload;
      })
      .addCase(getAllTransactionsThunk.fulfilled, (state, { payload }) => {
        state.incomes = payload.incomes;
        state.expenses = payload.expenses;
      })
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
          state.error = payload.message;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
