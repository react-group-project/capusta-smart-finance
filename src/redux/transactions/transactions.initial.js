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
  status: Status.IDLE,
  error: null,
};
