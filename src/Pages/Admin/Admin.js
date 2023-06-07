import AdminCSS from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Admin() {
  const accessToken = localStorage.getItem("access_token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <section>
      <h1>Welcome to Admin Page</h1>
    </section>
  );
}
