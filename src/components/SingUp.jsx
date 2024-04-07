import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase.config";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import { SignInUpAnimation } from "../pages/SignInUpAnimation";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароль не совпадает");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
      setError("");
      setPassword("");
    });
  };
  return (
    <div>
      <form onSubmit={register} className="form area">
        <h2>Создать профиль</h2>
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
          <button>Зарегистрироваться</button>

          <button onClick={() => navigate("/singin")}>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
