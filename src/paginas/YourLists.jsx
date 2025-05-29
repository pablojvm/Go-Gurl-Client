import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function YourLists() {

  const [favQueens, setFavQueens] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/queens`);
      setFavQueens(response.data.filter(favQueen => favQueen.isFav))
    } catch (error) {
      console.log(error);
    }
  };


  // useEffect y axios donde le pides al backend SOLO los personajes donde isFav === true

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tus Drags Favoritas</h2>
      <div style={{ border: "2px solid white", borderRadius: "10px", display:"flex", justifyContent:"space-evenly"}}>
        {favQueens.length === 0 ? (
          <p>Aún no escogiste tus reinas favoritas</p>
        ) : (
          favQueens.map((drag, index) => (
            <>
              <Card style={{width:"18rem"}}>
                <Card.Img
                  src={drag.image[0]}
                  style={{ width: "18rem", height: "25rem" }}
                />
                <Card.Body>
                  <Card.Title>{drag.name}</Card.Title>
                  <Card.Text
                    style={{
                      color: "black",
                      textShadow: "none",
                      fontSize: "16px",
                    }}
                  >
                    <p style={{ color: "black", textShadow: "none" }}>
                      Winner:{drag.winner ? "👑" : "❌"}
                    </p>
                    <p style={{ color: "black", textShadow: "none" }}>
                      Miss Congeniality:{drag.missCongeniality ? "👑" : "❌"}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))
        )}
      </div>
    </div>
  );
}

export default YourLists;
