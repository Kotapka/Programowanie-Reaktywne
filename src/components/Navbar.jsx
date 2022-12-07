import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/navbar.css';

const Mynavbar = () => {
    return (
        <header>
  <div class="logo">
    <img src={require('../assets/logo.png')} alt="Logo"/>
  </div>
  <nav class="left-actions">
      <button href="#">Home</button>
      <button href="#">Watchlist</button>
  </nav>
  <form class="search-form">
    <input type="text" placeholder="Search..."/>
    <button type="submit">Search</button>
  </form>
  <div class="right-actions">
    <button href="#">Login</button>
    <button href="#">Sign up</button>
  </div>
</header>
    )
};
//src={require('../assets/logo.png')}
export default Mynavbar;