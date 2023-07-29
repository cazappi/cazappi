export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});