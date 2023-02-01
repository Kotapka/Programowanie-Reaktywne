import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { React } from "react";
import { decodeToken, isExpired } from "react-jwt";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Mynavbar = () => {
  const path = useLocation();
  const isLogged = !isExpired(localStorage.getItem("token"));
  const nav = useNavigate();
  let navbar;
  function logOut() {
    const token = decodeToken(localStorage.getItem("token"));
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${token.userId}`,
      data: { userId: token.userId },
    }).then((response) => {
      localStorage.removeItem("token");
      nav("/");
    });
  }
  const currentPath = window.location.pathname;
  if (path.pathname === "/") {
    console.log(window.location);
    navbar = (
      <header>
        <Link to="/">
          <div className="logo">
            <img src={require("../assets/logo.png")} alt="Logo" />
          </div>
        </Link>
        <nav className="left-actions">
          <Link to="/">
            <button>Home</button>
          </Link>
          {isLogged && (
            <Link to="/add">
              <button>Dodaj film</button>
            </Link>
          )}
        </nav>
        <div className="right-actions">
          {isLogged && (
            <button href="#" onClick={logOut}>
              Wyloguj
            </button>
          )}
          {!isLogged && (
            <>
              <Link to="/signin">
                <button href="#">Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign up</button>
              </Link>
            </>
          )}
        </div>
      </header>
    );
  } else if (currentPath === "/signin") {
    console.log(window.location);
    navbar = (
      <header>
        <Link to="/">
          <div className="logo">
            <img src={require("../assets/logo.png")} alt="Logo" />
          </div>
        </Link>
        <nav className="left-actions">
          <Link to="/">
            <button>Home</button>
          </Link>
        </nav>
        <div className="right-actions">
          {isLogged && (
            <button href="#" onClick={logOut}>
              Wyloguj
            </button>
          )}
          {!isLogged && (
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          )}
        </div>
      </header>
    );
  } else if (currentPath === "/signup") {
    console.log(window.location);
    navbar = (
      <header>
        <Link to="/">
          <div className="logo">
            <img src={require("../assets/logo.png")} alt="Logo" />
          </div>
        </Link>
        <nav className="left-actions">
          <Link to="/">
            <button>Home</button>
          </Link>
        </nav>
        <div className="right-actions">
          {isLogged && (
            <button href="#" onClick={logOut}>
              Wyloguj
            </button>
          )}
          {!isLogged && (
            <Link to="/signin">
              <button href="#">Login</button>
            </Link>
          )}
        </div>
      </header>
    );
  } else {
    console.log(window.location);
    navbar = (
      <header>
        <Link to="/">
          <div className="logo">
            <img src={require("../assets/logo.png")} alt="Logo" />
          </div>
        </Link>
        <nav className="left-actions">
          <Link to="/">
            <button>Home</button>
          </Link>
        </nav>
        <div className="right-actions">
          {isLogged && (
            <button href="#" onClick={logOut}>
              Wyloguj
            </button>
          )}
        </div>
      </header>
    );
  }
  return navbar;
};
//src={require('../assets/logo.png')}
export default Mynavbar;
