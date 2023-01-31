import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  checkForAutorizationError,
  processingError,
  convertIncomeListToEng,
  convertExpenseListToEng,
  convertIncomeValueToRu,
  convertExpenseValueToRu,
  convertExpenseValueToEng,
  convertIncomeValueToEng,
  convertMonthToEng,
  successNotification,
} from 'helpers';
import {
  getIncomeCategoriesService,
  getExpenseCategoriesService,
  addExpenseService,
  addIncomeService,
  getExpenseService,
  getIncomeService,
  deleteTransactionService,
  getPeriodDataService,
} from 'services/transactions.service';

// Get all expenses list
export const getExpenseThunk = createAsyncThunk(
  'transactions/getExpense',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getExpenseService();

      const convertedData = data.expenses.map(item => ({
        ...item,
        amount: item.amount * -1,
        category: convertExpenseValueToEng(item.category),
      }));

      const convertedMonth = Object.keys(data.monthsStats).map(key => {
        return {
          ...convertMonthToEng(key),
          amount: data.monthsStats[key],
        };
      });

      return { data: convertedData, monthsStats: convertedMonth };
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Add expense to list
export const addExpenseThunk = createAsyncThunk(
  'transactions/addExpense',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      console.log(body);
      const data = await addExpenseService({
        ...body,
        category: convertExpenseValueToRu(body.category),
      });

      dispatch(getExpenseThunk());
      successNotification(
        `Expense "${data.transaction.description}" is added.`
      );
      return data;
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Get all incomes list
export const getIncomeThunk = createAsyncThunk(
  'transactions/getIncome',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getIncomeService();
      const convertedData = data.incomes.map(item => ({
        ...item,
        category: convertIncomeValueToEng(item.category),
      }));
      const convertedMonth = Object.keys(data.monthsStats).map(key => {
        return {
          ...convertMonthToEng(key),
          amount: data.monthsStats[key],
        };
      });

      return { data: convertedData, monthsStats: convertedMonth };
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Add income to list
export const addIncomeThunk = createAsyncThunk(
  'transactions/addIncome',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await addIncomeService({
        ...body,
        category: convertIncomeValueToRu(body.category),
      });

      dispatch(getIncomeThunk());
      successNotification(`Income "${data.transaction.description}" is added.`);

      return data;
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Delete transaction by id
export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteTransactionService(transactionId);

      dispatch(getAllTransactionsThunk());
      successNotification(`Transaction deleted.`);

      return data;
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Get all transactions
export const getAllTransactionsThunk = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await Promise.all([
        dispatch(getExpenseThunk()),
        dispatch(getIncomeThunk()),
      ]);

      return { expenses: result[0].payload, incomes: result[1].payload };
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Get income category in eng
export const getIncomeCategoriesThunk = createAsyncThunk(
  'transactions/getIncomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getIncomeCategoriesService();

      return convertIncomeListToEng(data);
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Get expense category in eng
export const getExpenseCategoriesThunk = createAsyncThunk(
  'transactions/getExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getExpenseCategoriesService();

      return convertExpenseListToEng(data);
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// Get data for a specified period
export const getPeriodDataThunk = createAsyncThunk(
  'transactions/getPeriodData',
  async (body, { rejectWithValue }) => {
    try {
      const data = await getPeriodDataService(body);
      const expenses = convertTransaction(
        data.expenses.expenseTotal,
        data.expenses.expensesData
      );
      const incomes = convertTransaction(
        data.incomes.incomeTotal,
        data.incomes.incomesData
      );

      return { incomes, expenses };
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

// TODO: перенести до допоміжних функцій
function convertTransaction(total, data) {
  return {
    total: total,
    data: Object.keys(data).reduce((acc, key) => {
      return {
        ...acc,
        [convertExpenseValueToEng(key) || convertIncomeValueToEng(key)]: {
          total: data[key].total,
          list: convertObjectToDescriptionList(data[key]),
        },
      };
    }, {}),
  };
}

function convertObjectToDescriptionList(obj) {
  return Object.keys(obj).reduce(
    (acc, key) =>
      key === 'total'
        ? acc
        : [
            ...acc,
            {
              description: key,
              amount: obj[key],
            },
          ],
    []
  );
}
