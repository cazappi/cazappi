import { storeProps } from "../types";

export const TOKEN_FIREBASE = "TOKEN_FIREBASE";
export const TOKEN_BACKEND = "TOKEN_BACKEND";
export const SET_USER_PROFILE = "SET_USER_PROFILE";


export const tokenFirebase = (token: string) => ({
  type: TOKEN_FIREBASE,
  payload: token,
});

export const tokenBackend = (token: string) => ({
  type: TOKEN_BACKEND,
  payload: token,
});

export const setUserProfile = (profile: storeProps) => ({ 
  type: SET_USER_PROFILE,
  payload: profile,
});