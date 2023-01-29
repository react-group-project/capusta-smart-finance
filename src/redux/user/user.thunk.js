import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkForAutorizationError, processingError } from 'helpers';
import {
  addBalanceService,
  getUserInfoService,
} from '../../services/user.service';

export const getUserInfoThunk = createAsyncThunk(
  'user/getUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserInfoService();
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);

export const addUserBalanceThunk = createAsyncThunk(
  'user/addUserBalance',
  async (newBalance, { rejectWithValue }) => {
    try {
      return await addBalanceService(newBalance);
    } catch (error) {
      checkForAutorizationError(error.response?.status);
      return rejectWithValue(processingError(error));
    }
  }
);
