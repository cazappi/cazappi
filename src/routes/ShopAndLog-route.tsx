import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUser } from "../utils/user-token-request";
import api from "../services/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

const HasShopVerificationRoute = (params: RouteProps) => {
  const [hasShop, setHasShop] = useState<boolean>(true);
  const [loading, setLoading] = useState(true);

  const user_id =
    useSelector((state: RootState) => state.auth.token_firebase) ??
    getUser().user_id;

  useEffect(() => {
    async function getStore() {
      await api
        .get(`store/${getUser().user_id}`, {
          headers: {
            "Authorization": `Bearer ${document.cookie.split("=")[1]}`,
          },
        })
        .then((response) => {
          setHasShop(true);
        })
        .catch(() => {
          setHasShop(false);
        });
    }

    getStore();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? null : (
    <Routes>
      <Route
        {...params}
        element={
          user_id ? (
            hasShop ? (
              <Navigate to="/profile" />
            ) : (
              params.element
            )
          ) : (
            <Navigate to="/unauthorized" />
          )
        }
      />
    </Routes>
  );
};

export default HasShopVerificationRoute;
