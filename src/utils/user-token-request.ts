import jwt_decode from "jwt-decode";

interface user_firebase {
  user_id: string | undefined;
}

export const getUser = (): user_firebase => {
  const token = document.cookie ? document.cookie.split("=")[1] : undefined;
  const user: user_firebase = token
    ? jwt_decode(token)
    : {
        user_id: undefined,
      };

  return user;
};
