import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false); // Lisatud loggedIn staatuse muutuja

  const handleLogin = () => {
    // Simuleerime sisselogimist, muutes loggedIn staatust
    setLoggedIn(true);
  };

  return (
    <div className="login" id="login">
      <span className="loginTitle">Logi sisse</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your email.." />
        <label>Parool</label>
        <input type="password" className="loginInput" placeholder="Enter your password.." />

        <button className="loginButton" onClick={handleLogin}>
          Logi sisse
        </button>
      </form>
      <Link to={"/register"}>
        <button className="loginRegisterButton">Registreeri</button>
      </Link>

      
      {loggedIn && (
        <div>
        </div>
      )}
    </div>
  );
}
