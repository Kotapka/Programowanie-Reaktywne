import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details() {
  const { id } = useParams();
  const getFilmData = () => {
    axios.get(`https://at.usermd.net/api/movies/${id}`).then((response) => {
      console.log(response);
      setFilms(response.data);
    });
  };
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getFilmData();
  }, []);

  return (
    <div className="details">
      <div className="details-con">{films.content}</div>
    </div>
  );
}

export default Details;
