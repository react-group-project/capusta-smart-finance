import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError, successNotification } from 'helpers';
import { token } from 'services/tokenApi';
import {
  loginUserService,
  logoutUserService,
  registerUserService,
} from 'services/auth.service';

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerUserService(body);

      successNotification(`"${data.email}" registered success.`);
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUserService(body);
      // add token to header in axios request
      token.set(data.accessToken);
      successNotification(`"${data.userData.email}" welcome.`);
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserService();
    } catch (error) {
      return rejectWithValue(processingError(error));
    } finally {
      token.unset();
    }
  }
);
