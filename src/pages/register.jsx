import React from "react";
import "../assets/registration.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  function postRegister(event) {
    event.preventDefault();
    if (name !== "" && email !== "" && password !== "") {
      toast.error("Prosze chwile poczekać! ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      axios
        .post("https://at.usermd.net/api/user/create", {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log(response);
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
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="registration-form">
      <h1>Rejestracja</h1>
      <div className="form-group">
        <label htmlFor="username">name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adres e-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <Link to="/">
        <button type="submit" onClick={postRegister}>
          Zarejestruj się
        </button>
      </Link>
    </form>
  );
}

export default Register;
