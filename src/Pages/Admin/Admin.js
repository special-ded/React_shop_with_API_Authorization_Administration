import { Link, Route, Routes } from "react-router-dom";
import s from "./Admin.module.css";
import AdminProducts from "../../Components/AdminProducts/AdminProducts";
import AdminOrders from "../../Components/AdminOrders/AdminOrders";
import AdminUsers from "../../Components/AdminUsers/AdminUsers";
import admin from "../../assets/imgs/admin.png";
import { CartContext } from "../../App";
import { useContext } from "react";
import localStorageService from "../../services/LocalStorage";

export default function Admin() {
  const { setToken } = useContext(CartContext);
  function Logout() {
    localStorageService.deleteToken();
    setToken(null);
  }

  return (
    <section className={s.admin}>
      <div className={s.admin__wrapper}>
        <nav className={s.admin__navigation}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__img}>
              <img src={admin} className={s.img}></img>
              <h4 className={s.admin__title}>Hi, Admin</h4>
            </li>
            <Link to="/admin/products">
              <li className={s.navigation__item}>Products</li>
            </Link>
            <Link to="/admin/users">
              <li className={s.navigation__item}>Users</li>
            </Link>
            <Link to="/admin/orders">
              <li className={s.navigation__item}>Orders</li>
            </Link>
            <li onClick={Logout} className={s.navigation__item}>
              Log out
            </li>
          </ul>
        </nav>
        <div className={s.admin__products}>
          <Routes>
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="users" element={<AdminUsers />}></Route>
            <Route path="orders" element={<AdminOrders />}></Route>
          </Routes>
        </div>
      </div>
    </section>
  );
}
