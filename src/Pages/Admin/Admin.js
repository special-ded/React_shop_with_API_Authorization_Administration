import AdminCSS from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
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
            <li className={AdminCSS.navigation__item}>Products</li>
            <li className={AdminCSS.navigation__item}>Users</li>
            <li className={AdminCSS.navigation__item}>Orders</li>
            <button className={AdminCSS.navigation__button}>Log out</button>
          </ul>
        </nav>
        <div className={AdminCSS.admin__products}>
          <h2>Products</h2>
          <div className={AdminCSS.products__wrapper}>
            <ul className={AdminCSS.products__title}>
              <li>Name</li>
              <li>Price</li>
              <li>ID</li>
              <li>Description</li>
            </ul>
            <ul className={AdminCSS.product__info}>
              <li>IPhone</li>
              <li>790</li>
              <li>44444444</li>
              <li>Description,Description</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
