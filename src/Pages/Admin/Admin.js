import AdminCSS from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginAdmin from "../LoginAdmin/LoginAdmin";
import jwt_decode from "jwt-decode";

export default function Admin() {
  const accessToken = localStorage.getItem("access_token");

  const navigate = useNavigate();
  const [accessDenied, setAccessDenied] = useState(true);

  useEffect(() => {
    const decoded = accessToken && jwt_decode(accessToken);

    if (!accessToken || decoded?.role !== "ADMIN") {
      console.log(decoded?.role);
      setAccessDenied(true);
    } else {
      setAccessDenied(false);
    }
  }, []);

  // if (accessToken) {
  //   console.log(decoded.role !== "ADMIN");
  //   console.log(decoded.role);
  // }

  // if (decoded?.role !== "ADMIN") {
  //   setAccessDenied(true);
  // }

  // if (decoded?.role === "ADMIN") {
  //   setAccessDenied(false);
  // }

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <section>
      <h1>Welcome to Admin Page</h1>
    </section>
  );
}
