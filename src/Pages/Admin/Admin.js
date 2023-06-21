import AdminCSS from "./Admin.module.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginAdmin from "../LoginAdmin/LoginAdmin";
import jwt_decode from "jwt-decode";

export default function Admin() {
  const accessToken = localStorage.getItem("access_token");

  const navigate = useNavigate();
  const [accessDenied, setAccessDenied] = useState(true);

  useEffect(() => {
    const decoded = accessToken && jwt_decode(accessToken);

    if (!accessToken || decoded?.role !== "ADMIN") {
      console.log(decoded?.role);
      setAccessDenied(true);
    } else {
      setAccessDenied(false);
    }
  }, []);

  // if (accessToken) {
  //   console.log(decoded.role !== "ADMIN");
  //   console.log(decoded.role);
  // }

  // if (decoded?.role !== "ADMIN") {
  //   setAccessDenied(true);
  // }

  // if (decoded?.role === "ADMIN") {
  //   setAccessDenied(false);
  // }

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <section className={AdminCSS.admin}>
      <h1>Welcome to Admin Page</h1>
      <div className={AdminCSS.admin__wrapper}>
        <nav className={AdminCSS.admin__navigation}>
          <ul className={AdminCSS.navigation__list}>
            <li className={AdminCSS.navigation__item}>
              <Link to="/admin/products">Products</Link>
            </li>
            <li className={AdminCSS.navigation__item}>Users</li>
            <li className={AdminCSS.navigation__item}>Orders</li>
            <button className={AdminCSS.navigation__button}>Log out</button>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/products/shirt" component={Shirt}></Route>
        <Route path="/products/pants" component={Pants}></Route>
      </Routes>
    </section>
  );
}
