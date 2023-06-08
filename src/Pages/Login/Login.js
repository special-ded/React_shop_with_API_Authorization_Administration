import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../Components/LoginComponent/LoginComponent";
import LoginCSS from "./Login.module.css";

export default function Login() {
  const [showModal, setShowModal] = useState(true);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/admin");
  // }, []);

  return (
    <>
      <p> LOGIN PAGE</p>
      <LoginComponent onClose={() => setShowModal(false)} />
    </>
  );
}
