import { privateApi } from './tokenApi';

export const getIncomeService = async () => {
  const { data } = await privateApi.get('/transaction/income');
  return data;
};

export const addIncomeService = async body => {
  const { data } = await privateApi.post('/transaction/income', body);
  return data;
};

export const getExpenseService = async () => {
  const { data } = await privateApi.get('/transaction/expense');
  return data;
};

export const addExpenseService = async body => {
  const { data } = await privateApi.post('/transaction/expense', body);
  return data;
};

export const deleteTransactionService = async transactionId => {
  const { data } = await privateApi.delete(`/transaction/${transactionId}`);
  return data;
};

export const getIncomeCategoriesService = async () => {
  const { data } = await privateApi.get('/transaction/income-categories');
  return data;
};

export const getExpenseCategoriesService = async () => {
  const { data } = await privateApi.get('/transaction/expense-categories');
  return data;
};

export const getPeriodDataService = async body => {
  const { data } = await privateApi.get('/transaction/period-data', {
    params: body,
  });
  return data;
};
