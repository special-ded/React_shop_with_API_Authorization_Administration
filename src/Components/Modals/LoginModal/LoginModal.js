import React from "react";
import "./LoginModal.css";
import Login from "../../Login/Login";

export default function LoginModal({ onClose }) {
  return (
    <div className="modal">
      <Login onClose={onClose} />
    </div>
  );
}
