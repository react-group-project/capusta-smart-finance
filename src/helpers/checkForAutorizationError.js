import { token } from 'services/tokenApi';

export const checkForAutorizationError = errorCode => {
  if (errorCode === 401) {
    token.unset();
  }
};
