import { createSelector } from '@reduxjs/toolkit';
import orderBy from 'lodash.orderby';

const selectTransactions = state => state.transactions;
const selectStatuses = state => selectTransactions(state).statuses;

export const selectGetPeriodStatus = state =>
  selectStatuses(state).getPeriodData;

export const selectExpenses = state => selectTransactions(state).expenses;
export const selectExpensesData = state => selectExpenses(state).data;
export const selectExpensesCategories = state =>
  selectExpenses(state).categories;
export const selectExpensesMonthsStats = state =>
  selectExpenses(state).monthsStats;

export const selectExpensesSortedLastSixMonths = createSelector(
  selectExpensesMonthsStats,
  months => {
    const filteredMonth = months.filter(month => !isNaN(month.amount));

    return orderBy(filteredMonth, ['id'], ['desc']);
  }
);

export const selectIncomes = state => selectTransactions(state).incomes;
export const selectIncomesData = state => selectIncomes(state).data;
export const selectIncomesCategories = state => selectIncomes(state).categories;
export const selectIncomesMonthsStats = state =>
  selectIncomes(state).monthsStats;

export const selectIncomesSortedLastSixMonths = createSelector(
  selectIncomesMonthsStats,
  months => {
    const filteredMonth = months.filter(month => !isNaN(month.amount));

    return orderBy(filteredMonth, ['id'], ['desc']);
  }
);

export const selectPeriod = state => selectTransactions(state).period;

export const selectTransactionsStatus = state =>
  selectTransactions(state).status;

export const selectTransactionsError = state => selectTransactions(state).error;

// All transactions incomes and expenses
export const selectAllTransactionsData = createSelector(
  [selectExpensesData, selectIncomesData],
  (expensesList, incomesList) => {
    return [...expensesList, ...incomesList];
  }
);

// Sorted transactions
export const selectSortedAllTransactionsData = createSelector(
  selectAllTransactionsData,
  list => {
    return orderBy(list, ['date'], ['desc']);
  }
);

const getCategoryName = (_, { categoryName }) => categoryName;
const getTransactionName = (_, { transactionName }) => transactionName;

export const selectPeriodByCategory = createSelector(
  [selectPeriod, getCategoryName, getTransactionName],
  (period, categoryName, transactionName) => {
    const descriptionsList = period[transactionName]?.data[categoryName]?.list;

    return orderBy(descriptionsList, ['amount'], ['desc'])?.reduce(
      (acc, item) => {
        acc.labels.push(item.description);
        acc.data.push(item.amount);
        return acc;
      },
      { labels: [], data: [] }
    );
  }
);
