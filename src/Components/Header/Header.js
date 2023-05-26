import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/imgs/cart.png";
import "./Header.css";

export default function Header({ FilterHTML }) {
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
          {FilterHTML ? <li>{FilterHTML()}</li> : null}
          <li>
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
