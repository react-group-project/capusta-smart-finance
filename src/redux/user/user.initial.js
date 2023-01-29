import { Status } from 'constants';

export const userInitialState = {
  balance: 0,
  email: null,
  transactions: [],
  error: null,
  status: Status.IDLE,
};
