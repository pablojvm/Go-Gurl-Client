import React from "react";
import "../paginas/Home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div id="encabezado" style={{ textAlign: "center", color: "white" }}>
      <h1>Bienvenido a</h1>
      <img src="/public/logo.png" style={{ height: "250px" }} />

      <p>
        En este lugar encontraras toda la información acerca del concurso mas
        mariquita de la herstory! Te invitamos a navegar web por nuestra y a
        elegir a tus travestis, tempporadas y capitulos favoritos.
      </p>
      <h2>Conoce a los Jueces</h2>
      <Carousel className="w-50">
        <Carousel.Item>
          <img src="/public/supreme.jpg" className="d-block w-100 mx=auto"></img>
          <Carousel.Caption>
            <h3>Supremme Deluxe</h3>
            <p>Presentadora y juez principal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/public/losJavis.jpg" className="d-block w-100"></img>
          <Carousel.Caption>
            <h3>Los Javis</h3>
            <p>Productores, creadores y jueces del concurso</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/public/analocking.webp" className="d-block w-100"></img>
          <Carousel.Caption>
            <h3>Anna Locking</h3>
            <p>
              Reconocida diseñadora y juez del concurso
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
