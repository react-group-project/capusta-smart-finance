const selectAuth = state => state.auth;

export const selectToken = state => selectAuth(state).accessToken;
export const selectTokenSid = state => selectAuth(state).sid;
export const selectRefreshToken = state => selectAuth(state).refreshToken;
export const selectAuthStatus = state => selectAuth(state).status;
export const selectAuthError = state => selectAuth(state).error;
export const selectIsAuthorized = state => selectAuth(state).isAuthorized;
export const selectIsRefreshing = state => selectAuth(state).isRefreshing;
