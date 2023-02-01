import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  function postLogin(event) {
    event.preventDefault();
    if (login !== "" && password !== "") {
      axios
        .post("https://at.usermd.net/api/user/auth", { login, password })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          nav("/");
        })
        .catch((error) =>
          toast.error("Błędne dane! ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
    } else {
      toast.error("Uzupełnij wszystkie pola! ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const nav = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="registration-form">
      <h1>Logowanie</h1>
      <div className="form-group">
        <label htmlFor="username">Login:</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link to="/" onClick={postLogin}>
        <button type="submit">Zaloguj się</button>
      </Link>
    </form>
  );
}

export default Signin;
