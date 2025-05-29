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
          <p style={{color:"black", textShadow:"none"}}>Ganadora: {episode.episodeWinner}</p>
          <p style={{color:"black", textShadow:"none"}}>Nº del capitulo: {episode.numberEpisode}</p>
          <p style={{color:"black", textShadow:"none"}}>Expulsada:{episode.episodeLooser} </p>
          <p style={{color:"black", textShadow:"none"}}>{episode.description}</p>
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


