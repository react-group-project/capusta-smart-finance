import { Status } from 'constants';

const selectAuth = state => state.auth;
const selectStatuses = state => selectAuth(state).statuses;
const selectErrors = state => selectAuth(state).errors;

export const selectToken = state => selectAuth(state).accessToken;
export const selectTokenSid = state => selectAuth(state).sid;
export const selectRefreshToken = state => selectAuth(state).refreshToken;
export const selectIsAuthorized = state => selectAuth(state).isAuthorized;
// Statuses
export const selectIsRefreshing = state =>
  selectStatuses(state).refreshToken === Status.PENDING;
export const selectLoginStatus = state => selectStatuses(state).login;
export const selectRegistrationStatus = state =>
  selectStatuses(state).registration;
export const selectLogoutStatus = state => selectStatuses(state).logout;
// Errors
export const selectLoginError = state => selectErrors(state).login;
export const selectRegistrationError = state =>
  selectErrors(state).registration;
export const selectLogoutError = state => selectErrors(state).logout;
