import React from "react";
import { Link } from "react-router-dom";
import FooterCSS from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </footer>
  );
}
