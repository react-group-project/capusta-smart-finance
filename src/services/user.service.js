import { privateApi } from './tokenApi';

export const getUserInfoService = async () => {
  const { data } = await privateApi.get('/user');
  return data;
};

export const addBalanceService = async newBalance => {
  const { data } = await privateApi.patch('/user/balance', { newBalance });
  return data;
};
