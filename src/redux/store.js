import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.slice';
import { userReducer } from './user/user.slice';
import { transactionsReducer } from './transactions/transactions.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    transactions: transactionsReducer,
  },
});
