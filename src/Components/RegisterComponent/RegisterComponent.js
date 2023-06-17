import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterComponentCSS from "./RegisterComponent.module.css";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])•{8,24}$/;
const REGISTER_URL =
  "https://api-git-master-special-ded.vercel.app/auth/registration";

export default function RegisterComponent({}) {
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
    let token = JSON.stringify(response?.data.token);
    console.log("TOKEN ", token);
    token && localStorage.setItem(key, token);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const response = await axios
      .post(REGISTER_URL, {
        username,
        password,
        role: "USER",
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

    console.log(response?.data?.token);
    setToLocalStorage("access_token", response);
    console.log(getFromLocalStorage("access_token"));

    if (JSON.stringify(response?.data.token)) {
      navigate("/user-cabinet");
    }

    console.log(JSON.stringify(response?.data.token));
  }

  return (
    <section>
      <div className={RegisterComponentCSS.login_page}>
        <form className={RegisterComponentCSS.form} onSubmit={submitHandler}>
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
          {/* <input
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            area-aria-invalid={validMatch ? "false" : "true"}
            area-describedby="confirmnote"
            placeholder="confirm password"
            required
          /> */}
          <p id="confirmnote"> Must match first password input field</p>
          <button>Register</button>
          <p className={RegisterComponentCSS.message}>
            Already registered? <a href="/user-login"> Log In</a>
          </p>
        </form>
      </div>
    </section>
  );
}
