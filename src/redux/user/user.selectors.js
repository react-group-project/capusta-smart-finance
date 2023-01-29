export const selectUser = state => state.user;
export const selectUserBalance = state => selectUser(state).balance;
export const selectUserEmail = state => selectUser(state).email;
export const selectUserStatus = state => selectUser(state).status;
export const selectUserError = state => selectUser(state).error;
