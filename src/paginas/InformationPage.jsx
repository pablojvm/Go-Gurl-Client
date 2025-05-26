import "./InformationPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../componentes/ExampleCarouselImage";

function InformationPage() {
  const params = useParams();
  const [queens, setQueens] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/queens`)
      .then((response) => {
        setQueens(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/seasons`)
      .then((response) => {
        setSeasons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/episodes`)
      .then((response) => {
        setEpisodes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="serchbar">
      <form>
        <input></input>
        <label></label>
      </form>
      <h2>Nuestras Reinas</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        
        {queens &&
          queens.slice(23,27).map((eachQueen, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }}>
                <Card.Img src={eachQueen.image} />
                <Card.Body>
                  <Card.Title>{eachQueen.name}</Card.Title>
                  <Card.Text>
                    Ejemplo aqui antes de introducir el texto
                  </Card.Text>
                  <Link to={"/informationPage/" + eachQueen.id}>
                    <Button>+ info</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <h2>Nuestras Temporadas</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {seasons &&
          seasons.map((eachSeason, i) => {
            return (
              <Card style={{ width: "18rem" }} key={i}>
                <Card.Img src={eachSeason.image} />
                <Card.Body>
                  <Card.Title>{eachSeason.name}</Card.Title>
                  <Card.Text>
                    {eachSeason.capitulos}
                  </Card.Text>
                  <Link to={"/informationPage/" + eachSeason.id}>
                    <Button>+ info</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <h2>Episodios</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {episodes &&
          episodes.slice(0, 4).map((eachEpisode, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{eachEpisode.title}</Card.Title>
                  <Card.Text>
                    Ejemplo aqui antes de introducir el texto
                  </Card.Text>
                  <Link to={"/informationPage/" + eachEpisode.id}>
                    <Button>+ info</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default InformationPage;
