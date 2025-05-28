import "./App.css";
import Home from "./paginas/Home";
import YourLists from "./paginas/YourLists";
import InformationPage from "./paginas/InformationPage";
import AboutUs from "./paginas/AboutUs";
import Error404 from "./paginas/Error404";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DragQueenCard from "./paginas/DragQueenCard";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import EpisodeCard from "./paginas/EpisodeCard";
import CreateQueen from "./paginas/CreateQueen";
import SeasonCard from "./paginas/SeasonCard";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="App">
      <NavBar handleShow={handleShow} />
      <div>
        <Offcanvas id="sideBar" show={show} onHide={handleClose} style={{backgroundColor: 'rgb(244, 250, 172)' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{textAlign:"center", color:"white"}}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{textAlign: "center",}}>
              <li style={{ marginBottom:"50px"}}>
                <Link to="/" onClick={handleClose}>Inicio</Link>
              </li>

              <li style={{ marginBottom:"50px"}}>
                <Link to="/yourLists" onClick={handleClose}>Tus Favoritos</Link>
              </li>

              <li style={{ marginBottom:"50px"}}>
                <Link to="/informationPage" onClick={handleClose}>Investiga!</Link>
              </li>

              <li style={{ marginBottom:"50px"}}>
                <Link to="/aboutUs" onClick={handleClose}>Conócenos!</Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourLists" element={<YourLists />} />
          <Route path="/informationPage" element={<InformationPage />} />
          <Route path="/informationPage/queens/:idDragQueen" element={<DragQueenCard />} />
          <Route path="/createQueen" element={<CreateQueen />} />
          <Route path="/informationPage/seasons/:idSeason" element={<SeasonCard />} />
          <Route path="/informationPage/episodes/:idEpisode" element={<EpisodeCard />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
