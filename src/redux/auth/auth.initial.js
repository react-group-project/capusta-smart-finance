import { Status } from 'constants';

export const authInitialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  status: Status.IDLE,
  error: null,
};
