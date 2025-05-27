import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EpisodeCard() {
  
  const params = useParams()
  const [episode, setEpisode] = useState(null)

  useEffect(() => {
    if (!params.idEpisode) return;
    const getData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/episodes/${params.idEpisode}`
        );
        setEpisode(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [params.idEpisode]); 

  if (!episode) {
    return <p>Trayendo el episodio...</p>;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{episode.title}</Card.Title>

        <Card.Text>
          <p>Ganadora: {episode.episodeWinner}</p>
          <p>Nº del capitulo: {episode.numberEpisode}</p>
          <p>Ejemplo aqui antes de introducir el texto</p>
        </Card.Text>

        <Button
          variant="primary"
          as={Link}
          to="/informationPage"
          style={{ width: "70px" }}
        >
          Back
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EpisodeCard;


