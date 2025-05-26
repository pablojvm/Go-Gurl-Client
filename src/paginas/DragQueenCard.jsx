import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DragQueenCard() {
  const params = useParams();
  const [queen, setQueens] = useState(null);

  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/queens/${params.idDragQueen}`
      );
      setQueens(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!queen) return <p>Loading...</p>;

  return (

    <Card style={{ width: "18rem" }}>
      <Card.Img src={queen.image} />
      <Card.Body>
        <Card.Title>{queen.name}</Card.Title>
        <Card.Text>Ejemplo aqui antes de introducir el texto</Card.Text>
        <p>Winner:{queen.winner ? "👑" : "❌"}</p>
        <p>Miss Congeniality:{queen.missCongeniality ? "👑" : "❌"}</p>
        <p>{queen.description}</p>
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

export default DragQueenCard;
