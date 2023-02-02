import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'constants';
import { logoutThunk } from 'redux/auth/auth.thunk';
import { transactionsInitialState } from './transactions.initial';
import {
  addExpenseThunk,
  addIncomeThunk,
  deleteTransactionThunk,
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
      // Get expenses categories
      .addCase(getExpensesCategoriesThunk.pending, state => {
        state.statuses.getExpensesCategories = Status.PENDING;
      })
      .addCase(getExpensesCategoriesThunk.fulfilled, (state, { payload }) => {
        state.expenses.categories = payload;
        state.statuses.getExpensesCategories = Status.FULFILLED;
      })
      .addCase(getExpensesCategoriesThunk.rejected, (state, { payload }) => {
        state.statuses.getExpensesCategories = Status.REJECTED;
        state.errors.getExpensesCategories = payload?.message;
      })
      // Get Incomes categories
      .addCase(getIncomesCategoriesThunk.pending, state => {
        state.statuses.getIncomesCategories = Status.PENDING;
      })
      .addCase(getIncomesCategoriesThunk.fulfilled, (state, { payload }) => {
        state.incomes.categories = payload;
        state.statuses.getIncomesCategories = Status.FULFILLED;
      })
      .addCase(getIncomesCategoriesThunk.rejected, (state, { payload }) => {
        state.statuses.getIncomesCategories = Status.REJECTED;
        state.errors.getIncomesCategories = payload?.message;
      })
      // Get expenses
      .addCase(getExpenseThunk.pending, state => {
        state.statuses.getExpenses = Status.PENDING;
      })
      .addCase(getExpenseThunk.fulfilled, (state, { payload }) => {
        state.expenses.data = payload.data;
        state.expenses.monthsStats = payload.monthsStats;
        state.statuses.getExpenses = Status.FULFILLED;
      })
      .addCase(getExpenseThunk.rejected, (state, { payload }) => {
        state.statuses.getExpenses = Status.REJECTED;
        state.errors.getExpenses = payload?.message;
      })
      // Get incomes
      .addCase(getIncomeThunk.pending, state => {
        state.statuses.getIncomes = Status.PENDING;
      })
      .addCase(getIncomeThunk.fulfilled, (state, { payload }) => {
        state.incomes.data = payload.data;
        state.incomes.monthsStats = payload.monthsStats;
        state.statuses.getIncomes = Status.FULFILLED;
      })
      .addCase(getIncomeThunk.rejected, (state, { payload }) => {
        state.statuses.getIncomes = Status.REJECTED;
        state.errors.getIncomes = payload?.message;
      })
      // Get all transactions
      .addCase(getAllTransactionsThunk.pending, state => {
        state.statuses.getAllTransactions = Status.PENDING;
      })
      .addCase(getAllTransactionsThunk.fulfilled, (state, { payload }) => {
        state.incomes.data = payload.incomes.data;
        state.incomes.monthsStats = payload.incomes.monthsStats;
        state.expenses.data = payload.expenses.data;
        state.expenses.monthsStats = payload.expenses.monthsStats;
        state.statuses.getAllTransactions = Status.FULFILLED;
      })
      .addCase(getAllTransactionsThunk.rejected, (state, { payload }) => {
        state.statuses.getAllTransactions = Status.REJECTED;
        state.errors.getAllTransactions = payload?.message;
      })
      // Add expense
      .addCase(addExpenseThunk.pending, state => {
        state.statuses.addExpense = Status.PENDING;
      })
      .addCase(addExpenseThunk.fulfilled, state => {
        state.statuses.addExpense = Status.FULFILLED;
      })
      .addCase(addExpenseThunk.rejected, (state, { payload }) => {
        state.statuses.addExpense = Status.REJECTED;
        state.errors.addExpense = payload?.message;
      })
      // Add income
      .addCase(addIncomeThunk.pending, state => {
        state.statuses.addIncome = Status.PENDING;
      })
      .addCase(addIncomeThunk.fulfilled, state => {
        state.statuses.addIncome = Status.FULFILLED;
      })
      .addCase(addIncomeThunk.rejected, (state, { payload }) => {
        state.statuses.addIncome = Status.REJECTED;
        state.errors.addIncome = payload?.message;
      })
      // Delete transaction
      .addCase(deleteTransactionThunk.pending, state => {
        state.statuses.deleteTransaction = Status.PENDING;
      })
      .addCase(deleteTransactionThunk.fulfilled, state => {
        state.statuses.deleteTransaction = Status.FULFILLED;
      })
      .addCase(deleteTransactionThunk.rejected, (state, { payload }) => {
        state.statuses.deleteTransaction = Status.REJECTED;
        state.errors.deleteTransaction = payload?.message;
      })
      // Get period data
      .addCase(getPeriodDataThunk.pending, state => {
        state.statuses.getPeriodData = Status.PENDING;
      })
      .addCase(getPeriodDataThunk.fulfilled, (state, { payload }) => {
        state.period = payload;
        state.statuses.getPeriodData = Status.FULFILLED;
      })
      .addCase(getPeriodDataThunk.rejected, (state, { payload }) => {
        state.statuses.getPeriodData = Status.REJECTED;
        state.errors.getPeriodData = payload?.message;
      })
      // TODO: додати очищення після помилки 401
      .addCase(logoutThunk.fulfilled, () => transactionsInitialState);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
