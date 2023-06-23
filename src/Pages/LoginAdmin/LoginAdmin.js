import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginAdminCSS from "./LoginAdmin.module.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import localStorageService from "../../services/LocalStorage";
import { CartContext } from "../../App";

const USER_REGEX = /^[a-zA-Z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])•{8,24}$/;
const LOGIN_URL = "https://api-git-master-special-ded.vercel.app/auth/login";

export default function LoginAdmin() {
  const { setToken } = useContext(CartContext);

  const userRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [accessDenied, setAccessDenied] = useState(true);
  const [username, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();

    const response = await axios
      .post(LOGIN_URL, {
        username,
        password,
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });

    const decodedToken = jwt_decode(response?.data.token);

    if (decodedToken?.role !== "ADMIN") {
      console.log(decodedToken?.role);
      setAccessDenied(true);
    } else {
      setAccessDenied(false);
      navigate("/admin/products");
    }
    setToken(response?.data.token);
    localStorageService.setToken("access_token", response);
  }

  return (
    <section>
      <div className={LoginAdminCSS.login_page}>
        <form className={LoginAdminCSS.form} onSubmit={submitHandler}>
          <p id="confirmnote"> ADMIN ONLY</p>
          <input
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="username"
            required
          />
          <input
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <button>Login</button>
        </form>
      </div>
    </section>
  );
}
