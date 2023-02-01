import React, { useState } from "react";
import { useEffect } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";

function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    axios.get("https://at.usermd.net/api/movies").then((response) => {
      console.log(response);
      setFilms(response.data);
    });
  };

  return (
    <div className="myrow">
      {films.map((film) => (
        <FilmCard
          id={film.id}
          key={film.id}
          img={film.image}
          title={film.title}
        />
      ))}
    </div>
  );
}
export default Home;
