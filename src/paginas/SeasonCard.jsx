import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function SeasonCard() {

  const params = useParams()
  const [season, setSeason] = useState(null)

  useEffect(() => {
    if (!params.idSeason) return;
    const getData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/seasons/${params.idSeason}`
        );
        setSeason(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [params.idSeason]); 

  if (!season) {
    return <p>Cargando temporada...</p>;
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={season.image} />
      <Card.Body>
        <Card.Title>{season.name}</Card.Title>
        <Card.Text>{season.description}</Card.Text>
        <h6>Participantes</h6>
        {season.queens.map(eachQueen => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>{eachQueen.name}</Card.Title>
                <Card.Text>Puesto:{eachQueen.ranking}</Card.Text>
              </Card.Body>

            </Card>
          )
        })}
        <Link to={"/informationPage/" + season.id}>
          <Button as={Link} to="/informationPage">Back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SeasonCard;
