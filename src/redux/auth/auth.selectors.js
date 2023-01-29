const selectAuth = state => state.auth;

export const selectToken = state => selectAuth(state).accessToken;
export const selectTokenSid = state => selectAuth(state).sid;
export const selectAuthStatus = state => selectAuth(state).status;
export const selectAuthError = state => selectAuth(state).error;
