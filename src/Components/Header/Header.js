import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/imgs/cart.png";
import user from "../../assets/imgs/user.png";
import "./Header.css";

export default function Header() {
  const cartItems = useContext(CartContext);

  return (
    <header className="header">
      <nav className="header_container">
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
          <li>
            <Link to="/cabinet">
              <img className="user_img" width={"30px"} src={user}></img>
            </Link>
            <Link className="cart_wrapper" to="/cart">
              <img className="cart_img" width={"30px"} src={cart}></img>
              <span className="counter">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
