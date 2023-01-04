import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <form className="registration-form">
      <h1>Logowanie</h1>
      <div className="form-group">
        <label htmlFor="username">Login:</label>
        <input type="text" id="login" />
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

export default Signin;
