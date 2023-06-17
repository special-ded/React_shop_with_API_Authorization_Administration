import { Outlet } from "react-router-dom";
import LoginAdmin from "../Pages/LoginAdmin/LoginAdmin";

function useAuth() {
  const user = { loggedIn: false };
  return user && user.loggedIn;
}

export default function AdminProtected() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginAdmin />;
}
