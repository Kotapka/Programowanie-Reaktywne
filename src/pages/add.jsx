import React from "react";
import "../assets/registration.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  function postRegister(event) {
    event.preventDefault();
    if (title !== "" && image !== "" && content !== "") {
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
        .post("https://at.usermd.net/api/movies", {
          title,
          image,
          content,
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
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  return (
    <form className="registration-form">
      <h1>Rejestracja</h1>
      <div className="form-group">
        <label htmlFor="username">Tytuł:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Zdjęcie:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Opis:</label>
        <input
          type="tezt"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Link to="/">
        <button type="submit" onClick={postRegister}>
          Dodaj film
        </button>
      </Link>
    </form>
  );
}

export default Add;
