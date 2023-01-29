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
    income: {
      total: 0,
      data: [],
    },
    expense: {
      total: 5000,
      data: {
        Health: {
          total: 4000,
          list: [{ description: 'Health 10', value: 30 }],
        },
        Other: {
          total: 1000,
          list: [{ description: 'Health 10', value: 30 }],
        },
      },
    },
  },
  status: Status.IDLE,
  error: null,
};
