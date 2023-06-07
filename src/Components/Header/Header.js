import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/imgs/cart.png";
import user from "../../assets/imgs/user.png";
import { createPortal } from "react-dom";
import HeaderCSS from "./Header.module.css";
import LoginComponent from "../LoginComponent/LoginComponent";

export default function Header() {
  const cartItems = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const bodyElement = document.querySelector("body");

  if (showModal) {
    bodyElement.style.overflow = "hidden";
    bodyElement.style.height = "100%";
  } else {
    bodyElement.style.overflow = "";
    bodyElement.style.height = "";
  }

  return (
    <header className={HeaderCSS.header}>
      <nav className={HeaderCSS.container}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          {showModal &&
            createPortal(
              <LoginComponent onClose={() => setShowModal(false)} />,
              document.body
            )}
          <li>
            <Link onClick={() => setShowModal(true)}>
              <img
                className={HeaderCSS.user_img}
                width={"30px"}
                src={user}
              ></img>
            </Link>
            <Link className={HeaderCSS.cart_wrapper} to="/cart">
              <img
                className={HeaderCSS.cart_img}
                width={"30px"}
                src={cart}
              ></img>
              <span className={HeaderCSS.counter}>{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
