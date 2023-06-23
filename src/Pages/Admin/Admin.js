import { Link, NavLink, Route, Routes } from "react-router-dom";
import s from "./Admin.module.css";
import AdminProducts from "../../Components/AdminProducts/AdminProducts";
import AdminOrders from "../../Components/AdminOrders/AdminOrders";
import AdminUsers from "../../Components/AdminUsers/AdminUsers";

import { CartContext } from "../../App";
import { useContext } from "react";
import localStorageService from "../../services/LocalStorage";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Admin() {
  return (
    <section className={s.admin}>
      <div className={s.admin__wrapper}>
        <Sidebar />
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
