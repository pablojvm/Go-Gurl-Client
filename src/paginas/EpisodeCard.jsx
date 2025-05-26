import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EpisodeCard() {
  const params = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    getData();
  }, [params.idEpisode]);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/episodes/${params.idEpisode}`);
      setEpisode(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!episode) return <p>Loading...</p>;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{episode.title}</Card.Title>
        <Card.Text>Ejemplo aqui antes de introducir el texto</Card.Text>

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


