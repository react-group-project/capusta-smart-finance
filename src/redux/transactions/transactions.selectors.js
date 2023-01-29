import { createSelector } from '@reduxjs/toolkit';
import orderBy from 'lodash.orderby';

const selectTransactions = state => state.transactions;

export const selectExpenses = state => selectTransactions(state).expenses;
export const selectExpensesData = state => selectExpenses(state).data;
export const selectExpensesMonthsStats = state =>
    selectExpenses(state).monthsStats;

export const selectIncomes = state => selectTransactions(state).incomes;
export const selectIncomesData = state => selectIncomes(state).data;
export const selectIncomesMonthsStats = state =>
    selectIncomes(state).monthsStats;

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

// QUESTION: як правильно
const getCategoryName = (_, categoryName) => categoryName;

export const selectIncomesPeriodByCategory = createSelector(
    [selectPeriod, getCategoryName],
    (period, categoryName) => {
        const descriptionsList = period.incomes?.data[categoryName]?.list;

        return descriptionsList?.reduce(
            (acc, item) => {
                acc.labels.push(item.description);
                acc.data.push(item.amount);
                return acc;
            },
            { labels: [], data: [] }
        );
    }
);

export const selectExposesPeriodByCategory = createSelector(
    [selectPeriod, getCategoryName],
    (period, categoryName) => {
        const descriptionsList = period.expenses?.data[categoryName]?.list;

        return descriptionsList?.reduce(
            (acc, item) => {
                acc.labels.push(item.description);
                acc.data.push(item.amount);
                return acc;
            },
            { labels: [], data: [] }
        );
    }
);
