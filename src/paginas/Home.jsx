import React from "react";
import "../paginas/Home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div id="encabezado" style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Bienvenido a</h1>
      <img src="logo.png" style={{ width: "400px" }} />
      <div id="text">
      <p>
        En este lugar encontraras toda la información acerca del concurso mas
        mariquita de la herstory! Te invitamos a navegar por nuestra web y a
        elegir a tus travestis, temporadas y capitulos favoritos.
      </p>
      </div>
      <h2>Conoce a los Jueces</h2>
      <Carousel className="w-50">
        <Carousel.Item>
          <img src="supreme.jpg" className="d-block w-100 mx=auto" style={{width: "600px"}}></img>
          <Carousel.Caption>
            <h3>Supremme Deluxe</h3>
            <p>Presentadora y juez principal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="losJavis.jpg" className="d-block w-100" style={{width: "600px"}}></img>
          <Carousel.Caption>
            <h3>Los Javis</h3>
            <p>Productores, creadores y jueces del concurso</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="analocking.webp" className="d-block w-100" style={{width: "600px"}}></img>
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
