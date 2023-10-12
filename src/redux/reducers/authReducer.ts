import { TOKEN_BACKEND, TOKEN_FIREBASE, SET_USER_PROFILE } from "../actions/authActions";
import { AuthState } from "../types";

const initialState: AuthState = {
  token_backend: null,
  token_firebase: null,
  userProfile: undefined
};

const authReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case TOKEN_FIREBASE:
      return {
        ...state,
        token_firebase: action.payload,
      };
    case TOKEN_BACKEND:
      return {
        ...state,
        token_backend: action.payload,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;