export const TOKEN_FIREBASE = "TOKEN_FIREBASE";
export const TOKEN_BACKEND = "TOKEN_BACKEND";

export const tokenFirebase = (token: string) => ({
  type: TOKEN_FIREBASE,
  payload: token,
});

export const tokenBackend = (token: string) => ({
  type: TOKEN_BACKEND,
  payload: token,
});