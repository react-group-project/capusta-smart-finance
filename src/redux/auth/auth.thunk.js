import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError, successNotification } from 'helpers';
import { token } from 'services/tokenApi';
import {
  loginUserService,
  logoutUserService,
  refreshTokenService,
  registerUserService,
} from 'services/auth.service';
import { selectRefreshToken, selectTokenSid } from './auth.selectors';
import { getUserInfoThunk } from 'redux/user/user.thunk';

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

export const refreshTokenThunk = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const sid = selectTokenSid(getState());
    const refreshToken = selectRefreshToken(getState());

    try {
      const data = await refreshTokenService(refreshToken, sid);
      token.set(data.newAccessToken);
      await dispatch(getUserInfoThunk());

      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(processingError(error));
    }
  }
);
