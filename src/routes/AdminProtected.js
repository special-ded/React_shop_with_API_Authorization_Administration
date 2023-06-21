import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../App";
import LoginAdmin from "../Pages/LoginAdmin/LoginAdmin";
import jwt_decode from "jwt-decode";

export default function AdminProtected() {
  const { token } = useContext(CartContext);
  const decodedToken = token && jwt_decode(token);

  function useAuth() {
    const user = { loggedIn: decodedToken?.role === "ADMIN" };
    return user && user.loggedIn;
  }

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginAdmin />;
}
