import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditCard from "../componentes/EditCard";

function DragQueenCard() {
  const params = useParams();
  const [queen, setQueens] = useState(null);
  const [mostrarComponente, setMostrarComponente] = useState(false)
  const [imagenActual, setImagenActual] = useState(0)

  const cambiarImagen = () => {
    setImagenActual((img) => 
    queen.image.length > 1 ? (img === 0 ? 1 : 0) : 0)
  }

  const handleClick = () => {
    setMostrarComponente(true)
  }
  const handleClose = () => {
    setMostrarComponente(false)
  }
  const handleUpdate = async (updatedData) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/queens/${params.idDragQueen}`,
      updatedData
    );
    setQueens(response.data);
    setMostrarComponente(false); 
  } catch (error) {
    console.log(error);
  }
};


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
    <div style={{display:"flex"}}>
      <div>
    <Card style={{ flexDirection: "row", marginRight:"10px"}}>
      <Card.Img src={queen.image[imagenActual]} style={{width:"25rem", height:"25rem"}}/>
      <Card.Body>
        <Card.Title>{queen.name}</Card.Title>
        <Card.Text>
        <p>Winner:{queen.winner ? "👑" : "❌"}</p>
        <p>Miss Congeniality:{queen.missCongeniality ? "👑" : "❌"}</p>
        <p>Temporadas{
        queen.seasons.map(eachSeason => {
            return (
              <Card>
              <Card.Body>
                <Card.Title>{eachSeason.temporada}</Card.Title>
                <Card.Text>Puesto:{eachSeason.ranking}</Card.Text>
              </Card.Body>

            </Card>
            )
          })}

        </p>
        <p>{queen.description}</p>
        </Card.Text>
        <Button
          variant="primary"
          as={Link}
          to="/informationPage"
          style={{ width: "70px" }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          style={{ width: "70px", marginLeft: "5px"}}
          onClick={handleClick}
        >
          Edit
        </Button>
        {queen.image.length > 1 && (
        <Button onClick={cambiarImagen} style={{marginLeft: "5px"}}>Cambiar imagen</Button>
      )}
      </Card.Body>
    </Card>
    </div>
    <div>
      {mostrarComponente && <EditCard onClose={handleClose} onUpdate={handleUpdate} queenData={queen}/>}
    </div>
    </div>
    
  );
}

export default DragQueenCard;
