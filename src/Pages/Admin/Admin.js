import { Link, Route, Routes } from "react-router-dom";
import s from "./Admin.module.css";
import AdminProducts from "../../Components/AdminProducts/AdminProducts";
import AdminOrders from "../../Components/AdminOrders/AdminOrders";
import AdminUsers from "../../Components/AdminUsers/AdminUsers";
import admin from "../../assets/imgs/admin.png";

export default function Admin() {
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
            <button className={s.navigation__button}>Log out</button>
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
