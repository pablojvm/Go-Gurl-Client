import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditCard from "../componentes/EditCard";

function DragQueenCard() {
  const params = useParams();
  const navigate = useNavigate()
  const [queen, setQueens] = useState(null);
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [imagenActual, setImagenActual] = useState(0);

  const handleToggleFav = async () => { //Añadir a lista de favoritos cambiando propiedad isFav
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/queens/${params.idDragQueen}`,
        { isFav: !queen.isFav }
      )
      setQueens({
      ...queen,
      isFav: response.data.isFav
    });
    } catch (error) {
      console.log(error);
      navigate("/500")
    }
  };

  const cambiarImagen = () => { // Alterna entre imagenes
    setImagenActual((img) =>
      queen.image.length > 1 ? (img === 0 ? 1 : 0) : 0
    );
  };

  const handleClick = () => { //Botones de desplegar y cerrar edicion 
    setMostrarComponente(true);
  };
  const handleClose = () => {
    setMostrarComponente(false);
  };


  const handleUpdate = async (updatedData) => { //Boton de edición completa
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/queens/${params.idDragQueen}`,
        updatedData
      );
      setQueens(response.data);
      setMostrarComponente(false);
    } catch (error) {
      console.log(error);
      navigate("/500")
    }
  };

  useEffect(() => {  // LLamada al backend para la información
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/queens/${params.idDragQueen}`
      );
      console.log(response)
      setQueens(response.data);
    } catch (error) {
      console.log(error);
      navigate("/500")
    }
  };

  if (!queen) {
    return <p>Trayendo el episodio...</p>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Card style={{ flexDirection: "row", marginRight: "10px" }}>
          <Card.Img
            src={queen.image[imagenActual] || "descarga.jpeg"}
            style={{ width: "25rem", height: "25rem" }}
          />
          <Card.Body>
            <Card.Title>{queen.name}</Card.Title>
            <Card.Text
              style={{ color: "black", textShadow: "none", fontSize: "16px" }}
            >
              <p style={{ color: "black", textShadow: "none" }}>
                Winner:{queen.winner ? "👑" : "❌"}
              </p>
              <p style={{ color: "black", textShadow: "none" }}>
                Miss Congeniality:{queen.missCongeniality ? "👑" : "❌"}
              </p>
              <p style={{ color: "black", textShadow: "none" }}>
                Temporadas
                {queen.seasons.map((eachSeason, index) => {
                  return (
                    <Card key={index}>
                      <Card.Body>
                        <Card.Title style={{ textShadow: "none" }}>
                          {eachSeason.temporada}
                        </Card.Title>
                        <Card.Text
                          style={{
                            color: "black",
                            textShadow: "none",
                            fontSize: "16px",
                          }}
                        >
                          Puesto:{eachSeason.ranking}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </p>
              <p style={{ color: "black", textShadow: "none" }}>
                {queen.description}
              </p>
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
              style={{ width: "70px", marginLeft: "5px" }}
              onClick={handleClick}
            >
              Edit
            </Button>
            {queen.image.length > 1 && (
              <Button onClick={cambiarImagen} style={{ marginLeft: "5px" }}>
                Cambiar imagen
              </Button>
            )}
            <Button
              variant="outline-danger"
              onClick={handleToggleFav}
              style={{ marginLeft: "5px" }}
            >
              <img
                src={queen.isFav ? "/corazon-rojo.png" : "/corazon.png"}
                style={{ width: "30px" }}
              />
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        {mostrarComponente && (
          <EditCard
            onClose={handleClose}
            onUpdate={handleUpdate}
            queenData={queen}
          />
        )}
      </div>
    </div>
  );
}

export default DragQueenCard;
