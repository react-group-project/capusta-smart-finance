import { Status } from 'constants';

export const authInitialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isAuthorized: false,
  statuses: {
    login: Status.IDLE,
    registration: Status.IDLE,
    logout: Status.IDLE,
    refreshToken: Status.IDLE,
  },
  errors: {
    login: null,
    registration: null,
    logout: null,
    refreshToken: null,
  },
};
