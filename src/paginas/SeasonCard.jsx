import React from "react";

function SeasonCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{eachEpisode.title}</Card.Title>
        <Card.Text>Ejemplo aqui antes de introducir el texto</Card.Text>
        <Link to={"/informationPage/" + eachEpisode.id}>
          <Button>+ info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SeasonCard;
