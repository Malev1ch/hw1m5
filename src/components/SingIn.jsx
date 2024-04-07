import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase.config";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setError("");
        setPassword("");
      })
      .catch(() => {
        setError("Такого аккаунта не существует");
      });
  };
  return (
    <div>
      <form className="form area">
        <h2>Войти в аккаунт</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <div className="sign-up-in__button">
          <button onClick={logIn}>Авторизация</button>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
          <button onClick={() => navigate("/")}>Регистрация</button>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
