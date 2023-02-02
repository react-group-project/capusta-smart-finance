import { Status } from 'constants';

export const transactionsInitialState = {
  incomes: {
    data: [],
    monthsStats: [],
    categories: [],
  },
  expenses: {
    data: [],
    monthsStats: [],
    categories: [],
  },
  period: {
    incomes: {
      total: 0,
      data: {},
    },
    expenses: {
      total: 0,
      data: {},
    },
  },
  statuses: {
    getAllTransactions: Status.IDLE,
    getExpenses: Status.IDLE,
    getIncomes: Status.IDLE,
    getExpensesCategories: Status.IDLE,
    getIncomesCategories: Status.IDLE,
    addExpense: Status.IDLE,
    addIncome: Status.IDLE,
    deleteTransaction: Status.IDLE,
    getPeriodData: Status.IDLE,
  },
  errors: {
    getAllTransactions: null,
    getExpenses: null,
    getIncomes: null,
    getExpensesCategories: null,
    getIncomesCategories: null,
    addExpense: null,
    addIncome: null,
    deleteTransaction: null,
    getPeriodData: null,
  },
};
