import React from "react";
import LoginModalCSS from "./LoginModal.module.css";
import Login from "../../Login/Login";

export default function LoginModal({ onClose }) {
  return (
    <div className={LoginModalCSS.modal}>
      <Login onClose={onClose} />
    </div>
  );
}
