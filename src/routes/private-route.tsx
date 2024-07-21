import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { getUser } from "../utils/user-token-request";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

const PrivateRoute = (params: RouteProps) => {
  const user_id =
    useSelector((state: RootState) => state.auth.token_firebase) ??
    getUser().user_id;

  return (
    <Routes>
      <Route
        {...params}
        element={/* user_id */ true ? params.element : <Navigate to="/unauthorized" />}
      />
    </Routes>
  );
};

export default PrivateRoute;
