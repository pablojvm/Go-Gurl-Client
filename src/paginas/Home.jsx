import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

function Home() {
  return (
    <div
      id="encabezado"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Bienvenido a</h1>
      <img src="logo.png" style={{ width: "400px" }} />
      <div id="text">
        <p>
          En este lugar encontraras toda la información acerca del concurso mas
          mariquita de la herstory! Te invitamos a navegar por nuestra web y a
          elegir a tus travestis, temporadas y capitulos favoritos.
        </p>
      </div>
      <div style={{ width: "60%" }}>
        <Accordion defaultActiveKey="null">
          <Accordion.Item
            eventKey="0"
            style={{ backgroundColor: "rgb(244, 249, 177)" }}
          >
            <Accordion.Header>Próxima temporada en camino</Accordion.Header>
            <Accordion.Body>
              Agarrate las bragas marichocho que la temporada 5 ya está aquí.
              Ponte un buen colorete, peina tu mejor peluca y aprietate tu faja,
              que la mejor competición de Drag vuelve este año. Ya tenemos el
              cast filtrado así que quédate por aquí que te lo contamos TODO!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{ backgroundColor: "rgb(244, 249, 177)" }}
          >
            <Accordion.Header>Rumored Cast!</Accordion.Header>
            <Accordion.Body>
              Alexandra del Raval, Dafne Mugler, Denebola Murnau,Eva Harrington,
              Ferrxn, Krystal Forever, La Escándalo, Laca Udilla, Margarita
              Kalifata, Nori, Nix, Satin Greco y Steah. Con un total de 13
              reinas, la quinta se convertirá en la temporada con mas
              concursantes
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>


      <h2>Conoce a los Jueces</h2>
      <Carousel className="w-50">
        <Carousel.Item>
          <img
            src="supreme.jpg"
            className="d-block w-100 mx=auto"
            style={{ width: "600px" }}
          ></img>
          <Carousel.Caption>
            <h3>Supremme Deluxe</h3>
            <p>Presentadora y juez principal</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="losJavis.jpg"
            className="d-block w-100"
            style={{ width: "600px" }}
          ></img>
          <Carousel.Caption>
            <h3>Los Javis</h3>
            <p>Productores, creadores y jueces del concurso</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="analocking.webp"
            className="d-block w-100"
            style={{ width: "600px" }}
          ></img>
          <Carousel.Caption>
            <h3>Anna Locking</h3>
            <p>Reconocida diseñadora y juez del concurso</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
