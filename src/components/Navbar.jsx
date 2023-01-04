import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { React } from "react";

const Mynavbar = () => {
  const path = useLocation();

  let navbar;
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
        </nav>
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        <div className="right-actions">
          <Link to="/signin">
            <button href="#">Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
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
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
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
          <Link to="/signin">
            <button href="#">Login</button>
          </Link>
        </div>
      </header>
    );
  } else if (currentPath === "/details") {
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
          <Link to="/signin">
            <button href="#">Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </header>
    );
  }
  return navbar;
};
//src={require('../assets/logo.png')}
export default Mynavbar;
