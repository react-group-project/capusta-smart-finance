import { privateApi, publicApi } from './tokenApi';

export const registerUserService = async body => {
  const { data } = await publicApi.post('/auth/register', body);
  return data;
};

export const loginUserService = async body => {
  const { data } = await publicApi.post('/auth/login', body);
  return data;
};

export const logoutUserService = async () => {
  return privateApi.post('/auth/logout');
};

export const refreshTokenService = async (refreshToken, sid) => {
  const { data } = await privateApi.post(
    '/auth/refresh',
    { sid },
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return data;
};
