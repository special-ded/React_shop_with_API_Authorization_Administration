import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../App";
import localStorageService from "../../services/localStorage.service";
import s from "./Sidebar.module.css";
import admin from "../../assets/imgs/admin.png";

export default function Sidebar() {
  const { setToken } = useContext(CartContext);
  function Logout() {
    localStorageService.deleteToken();
    setToken(null);
  }

  return (
    <nav className={s.admin__navigation}>
      <ul className={s.navigation__list}>
        <li className={s.navigation__img}>
          <img src={admin} className={s.img}></img>
          <h4 className={s.admin__title}>Hi, Admin</h4>
        </li>
        <NavLink
          to="/admin/products"
          className={({ isActive, isPending }) =>
            isPending ? "s.pending" : isActive ? `${s.active}` : ""
          }
        >
          <li className={s.navigation__item}>Products</li>
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive, isPending }) =>
            isPending ? "s.pending" : isActive ? `${s.active}` : ""
          }
        >
          {" "}
          <li className={s.navigation__item}>Users</li>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive, isPending }) =>
            isPending ? "s.pending" : isActive ? `${s.active}` : ""
          }
        >
          {" "}
          <li className={s.navigation__item}>Orders</li>
        </NavLink>
        <li onClick={Logout} className={s.navigation__item}>
          Log out
        </li>
      </ul>
    </nav>
  );
}
