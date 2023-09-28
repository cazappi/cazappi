import jwt_decode from "jwt-decode";
import { getToken } from "./get-cookie";

interface user_firebase {
  user_id: string | undefined;
}

export const getUser = (): user_firebase => {
  const token = getToken();
  const user: user_firebase =
    token !== ""
      ? jwt_decode(token)
      : {
          user_id: undefined,
        };

  return user;
};
