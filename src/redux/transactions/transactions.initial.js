import { Status } from 'constants';

export const transactionsInitialState = {
  incomes: {
    data: [],
    monthsStats: [],
  },
  expenses: {
    data: [],
    monthsStats: [],
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
