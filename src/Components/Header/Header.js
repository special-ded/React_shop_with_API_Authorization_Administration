import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/imgs/cart.png";
import "./Header.css";

export default function Header({ FilterHTML }) {
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
            <Link to="/cart">
              <img width={"24px"} src={cart}></img>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
