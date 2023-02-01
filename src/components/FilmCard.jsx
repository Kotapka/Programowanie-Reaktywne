import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "D:/Projekt Reaktywne/projekt-reaktywne/src/assets/card.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const Myfilmcard = (props) => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const nav = useNavigate();

  function deleteFilm() {
    axios
      .delete(`https://at.usermd.net/api/movie/${props.id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  }

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.img}
        width="auto"
        height="300px"
        alt="Card image cap"
      ></img>
      <span id="rateMe3" className="rating-faces"></span>
      <div className="card-body">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <h5 className="card-title" style={{ wordWrap: "wrap", width: "250px" }}>
          {props.title}
        </h5>
        <Link to={`/details/${props.id}`}>
          <p className="card-text">Opis.</p>
        </Link>
        <button onClick={deleteFilm}>Usuń</button>
      </div>
    </div>
  );
};

export default Myfilmcard;
