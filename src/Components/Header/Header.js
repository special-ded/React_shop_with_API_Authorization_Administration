import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/imgs/cart.png";
import user from "../../assets/imgs/user.png";
import { createPortal } from "react-dom";
import HeaderCSS from "./Header.module.css";
import LoginComponent from "../LoginComponent/LoginComponent";
import userEvent from "@testing-library/user-event";

export default function Header() {
  const cartItems = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const bodyElement = document.querySelector("body");
  const navigate = useNavigate();

  if (showModal) {
    bodyElement.style.overflow = "hidden";
    bodyElement.style.height = "100%";
  } else {
    bodyElement.style.overflow = "";
    bodyElement.style.height = "";
  }
  const accessToken = localStorage.getItem("access_token");

  function clickHandler() {
    if (!accessToken) {
      navigate("/user-login");
    }
    if (accessToken) {
      navigate("/user-cabinet");
    }
  }

  return (
    <header className={HeaderCSS.header}>
      <nav className={HeaderCSS.nav}>
        <ul className={HeaderCSS.nav__list}>
          <li className={HeaderCSS.transform}>
            <Link to="/">Home</Link>
          </li>
          <li className={HeaderCSS.transform}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={HeaderCSS.transform}>
            <Link to="/admin">Admin</Link>
          </li>
          {/* {showModal &&
            createPortal(
              <LoginComponent onClose={() => setShowModal(false)} />,
              document.body
            )} */}
          <li className={HeaderCSS.group}>
            <div onClick={() => clickHandler()} className={HeaderCSS.transform}>
              <Link>
                <img
                  className={HeaderCSS.user_img}
                  width={"30px"}
                  src={user}
                ></img>
              </Link>
            </div>
            <div className={HeaderCSS.transform}>
              <Link className={HeaderCSS.cart_wrapper} to="/cart">
                <img
                  className={HeaderCSS.user_img}
                  width={"30px"}
                  src={cart}
                ></img>
                <span className={HeaderCSS.counter}>{cartItems.length}</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
