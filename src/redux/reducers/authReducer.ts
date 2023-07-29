import { LOGIN_SUCCESS } from "../actions/authActions";
import { AuthState } from "../types";

const initialState: AuthState = {
  token: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;