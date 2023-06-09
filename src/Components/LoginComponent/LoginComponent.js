import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponentCSS from "./LoginComponent.module.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])•{8,24}$/;
// const LOGIN_URL = "https://hys-fe-course-api-omega.vercel.app/auth/login";

const LOGIN_URL = "https://api-git-master-special-ded.vercel.app/auth/login";

export default function LoginComponent({ onClose }) {
  const userRef = useRef();
  const passwordRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [username, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [token, setToken] = useState(null);

  function getFromLocalStorage(key) {
    console.log(key);
    return localStorage.getItem(key);
  }

  function setToLocalStorage(key, response) {
    let token = JSON.stringify(response?.data.access_token);
    console.log("dddddddd", token);
    let decoded = jwt_decode(token);
    console.log(decoded);
    token && localStorage.setItem(key, token);
  }

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

    setToLocalStorage("access_token", response);
    console.log(getFromLocalStorage("access_token"));

    if (JSON.stringify(response?.data.access_token)) {
      navigate("/admin");
    }

    console.log(JSON.stringify(response?.data.access_token));
  }

  return (
    <section>
      <div className={LoginComponentCSS.bg}></div>
      <div className={LoginComponentCSS.login_page}>
        <form className={LoginComponentCSS.form} onSubmit={submitHandler}>
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
          <p id="confirmnote"> Must match first password input field</p>
          <button onClick={() => onClose()}>Login</button>
          <p className={LoginComponentCSS.message}>
            Not registered? <a href="/user-register"> Register</a>
          </p>
        </form>
      </div>
    </section>
  );
}
