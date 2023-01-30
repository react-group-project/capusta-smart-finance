import { Status } from 'constants';

export const authInitialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isAuthorized: false,
  isRefreshing: false,
  status: Status.IDLE,
  error: null,
};
