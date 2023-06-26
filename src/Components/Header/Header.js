import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import cart from "../../assets/imgs/cart.png";
import user from "../../assets/imgs/user.png";
import HeaderCSS from "./Header.module.css";
import jwt_decode from "jwt-decode";
import localStorageService from "../../services/localStorage.service";

export default function Header() {
  const { cartItems, token, setToken } = useContext(CartContext);
  const navigate = useNavigate();
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    token && setDecodedToken(() => jwt_decode(token));
    !token && setDecodedToken(null);
  }, [token]);

  function clickHandler() {
    if (!token) {
      navigate("/user-login");
    }
    if (token) {
      console.log(token);
      navigate("/user-cabinet");
      setDecodedToken(() => jwt_decode(token));
    }
  }

  function AuthHandler() {
    if (token) {
      localStorageService.deleteToken();
      console.log(token);
      setToken(null);
      navigate("/user-login");
      setDecodedToken(null);
      return;
    }

    clickHandler();
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
            <Link to="/admin/products">Admin</Link>
          </li>
          <li className={HeaderCSS.group}>
            <div className={HeaderCSS.user}>
              <span className={HeaderCSS.user_name}>
                {decodedToken?.username || "Not Loged"}
              </span>
              <button
                className={HeaderCSS.logout_btn}
                onClick={() => AuthHandler()}
              >
                {token ? "Exit" : "Login"}
              </button>
            </div>
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
                <span className={HeaderCSS.counter}>{cartItems?.length}</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
