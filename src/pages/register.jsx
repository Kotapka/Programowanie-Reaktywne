import React from "react";
import "../assets/registration.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <form className="registration-form">
      <h1>Rejestracja</h1>
      <div className="form-group">
        <label htmlFor="username">Login:</label>
        <input type="text" id="login" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adres e-mail:</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Hasło:</label>
        <input type="password" id="password" />
      </div>
      <Link to="/">
        <button type="submit">Zarejestruj się</button>
      </Link>
    </form>
  );
}

export default Register;
