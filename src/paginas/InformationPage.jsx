import "./InformationPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function InformationPage() {
  const params = useParams();
  const [queens, setQueens] = useState([]);
  const [fourQueens, setFourQueens] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [fourEpisodes, setFourEpisodes] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const filteredQueens = queens.filter((q) =>
    q.name.toLowerCase().includes(searchBar.toLowerCase())
  );
  const filteredSeasons = seasons.filter((s) =>
    s.name.toLowerCase().includes(searchBar.toLowerCase())
  );
  const filteredEpisodes = episodes.filter((e) =>
    e.title.toLowerCase().includes(searchBar.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/queens`)
      .then((response) => {
        setQueens(response.data);
        setFourQueens(
          [...response.data].sort(() => 0.5 - Math.random()).slice(0, 4)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteQueen = (idToDelete) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/queens/${idToDelete}`)
      .then(() => {
        setQueens((queenEliminada) =>
          queenEliminada.filter((queen) => queen.id !== idToDelete)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/seasons`)
      .then((response) => {
        setSeasons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/episodes`)
      .then((response) => {
        setEpisodes(response.data);
        setFourEpisodes(
          [...response.data].sort(() => 0.5 - Math.random()).slice(0, 4)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="serchbar" style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
      <InputGroup className="mb-3" style={{width:"70%"}}>
        <Form.Control
          placeholder="Busca aquí a tu reina, epidodio o temporada"
          aria-label="Busca aquí a tu reina, epidodio o temporada"
          aria-describedby="basic-addon2"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
      </InputGroup>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {searchBar.trim() !== "" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <>
              <h2>Reinas que coincidden con tu búsqueda</h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly",gap:"15px"}}>
                {filteredQueens.length > 0 ? (
                  filteredQueens.map((eachQueen) => (
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        src={eachQueen.image[0]}
                        style={{ width: "18rem", height: "30rem" }}
                      />
                      <Card.Body>
                        {eachQueen.winner && <p>👑</p>}
                        <Card.Title>{eachQueen.name}</Card.Title>
                        <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>{eachQueen.description}</Card.Text>
                        <Link to={"/informationPage/queens/" + eachQueen.id}>
                          <Button>+ info</Button>
                        </Link>
                        <Button style={{marginLeft: "5px"}} onClick={() => deleteQueen(eachQueen.id)}>
                          Sashay!
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>No hay reinas que coincidan.</p>
                )}
              </div>
            </>
            <>
              <h2>Temporadas que coincidden con tu búsqueda</h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly", gap: "15px" }}>
                {filteredSeasons.length > 0 ? (
                  filteredSeasons.map((eachSeason) => (
                    <Card style={{ width: "18rem" }}>
                      <Card.Img src={eachSeason.image} />
                      <Card.Body>
                        <Card.Title>{eachSeason.name}</Card.Title>
                        <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>{eachSeason.capitulos}</Card.Text>
                        <Link to={"/informationPage/seasons/" + eachSeason.id}>
                          <Button>+ info</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>No hay temporadas que coincidan.</p>
                )}
              </div>
            </>
            <>
              <h2>Episodios que coincidden con tu búsqueda</h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly", gap: "15px" }}>
                {filteredEpisodes.length > 0 ? (
                  filteredEpisodes.map((eachEpisode) => (
                    <Card style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>{eachEpisode.title}</Card.Title>
                        <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>
                          Ejemplo aqui antes de introducir el texto
                        </Card.Text>
                        <Link
                          to={"/informationPage/episodes/" + eachEpisode.id}
                        >
                          <Button>+ info</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <p>No hay episodios que coincidan.</p>
                )}
              </div>
            </>
          </div>
        )}
      </div>
      {searchBar.trim() === "" && (
        <>
          <h2>Nuestras Reinas</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {fourQueens &&
              fourQueens.map((eachQueen, i) => {
                return (
                  <Card key={i} style={{ width: "18rem"}}>
                    <Card.Img
                      src={eachQueen.image[0]}
                      style={{ width: "18rem", height: "30rem" }}
                    />
                    <Card.Body>
                      {eachQueen.winner && <p>👑</p>}
                      <Card.Title>{eachQueen.name}</Card.Title>
                      <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>{eachQueen.description}</Card.Text>
                      <Link to={"/informationPage/queens/" + eachQueen.id}>
                        <Button>+ info</Button>
                      </Link>
                      <Button style={{marginLeft: "5px"}} onClick={() => deleteQueen(eachQueen.id)}>
                        Sashay!
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
          <Link to={"/createQueen"}>
            <Button style={{ marginTop: "20px" }}>Crea tu propia REINA!</Button>
          </Link>
          {queens.length > 46 && <h2>Tus reinas</h2>}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              gap: "15px",
            }}
          >
            {queens &&
              queens.slice(46).map((eachQueen, i) => {
                return (
                  <Card key={i} style={{ width: "18rem" }}>
                    <Card.Img src={eachQueen.image} />
                    <Card.Body>
                      <Card.Title>{eachQueen.name}</Card.Title>
                      <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>{eachQueen.description}</Card.Text>
                      <Link to={"/informationPage/queens/" + eachQueen.id}>
                        <Button>+ info</Button>
                      </Link>
                      <Button style={{marginLeft: "5px"}} onClick={() => deleteQueen(eachQueen.id)}>
                        Sashay!
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
          <h2>Nuestras Temporadas</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {seasons.map((eachSeason, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i}>
                  <Card.Img src={eachSeason.image} />
                  <Card.Body>
                    <Card.Title>{eachSeason.name}</Card.Title>
                    <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>{eachSeason.capitulos}</Card.Text>
                    <Link to={"/informationPage/seasons/" + eachSeason.id}>
                      <Button>+ info</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
          <h2>Episodios</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {fourEpisodes &&
              fourEpisodes.map((eachEpisode, i) => {
                return (
                  <Card key={i} style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{eachEpisode.title}</Card.Title>
                      <Card.Text style={{color:"black", textShadow:"none", fontSize:"16px"}}>
                        Ejemplo aqui antes de introducir el texto
                      </Card.Text>
                      <Link to={"/informationPage/episodes/" + eachEpisode.id}>
                        <Button>+ info</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}

export default InformationPage;
