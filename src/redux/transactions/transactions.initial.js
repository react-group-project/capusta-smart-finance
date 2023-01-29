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
  // QUESTION: як правильно зробити отримання данних за певний період? Зберігати в сторі чи просто робити запит на сервер і повертати данні напряму, без запису в стейт?
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
