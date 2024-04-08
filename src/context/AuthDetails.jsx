import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/");
      } else {
        setAuthUser(null);
        navigate("/singup");
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSingOut = () => {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  };

  return (
    <div className="top_auth">
      {authUser && <button onClick={userSingOut}>Выйти</button>}
    </div>
  );
};

export default AuthDetails;
