import "./App.css";
import Home from "./paginas/Home";
import YourLists from "./paginas/YourLists";
import InformationPage from "./paginas/InformationPage";
import AboutUs from "./paginas/AboutUs";
import Error404 from "./paginas/Error404";
import NavBar from "./componentes/NavBar";
import SideBar from "./componentes/SideBar";
import Footer from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DragQueenCard from "./paginas/DragQueenCard";
// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="App">
      <NavBar handleShow={handleShow} />
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>

              <li>
                <Link to="/yourLists">Tus Favoritos</Link>
              </li>

              <li>
                <Link to="/informationPage">Investiga!</Link>
              </li>

              <li>
                <Link to="/aboutUs">Conócenos!</Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourLists" element={<YourLists />} />
          <Route path="/informationPage" element={<InformationPage />} />
          <Route
            path="/informationPage/:idDragQueen"
            element={<DragQueenCard />}
          />
          <Route path="/informationPage/:idSeason" element="" />
          <Route path="/informationPage/:idChapter" element="" />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
