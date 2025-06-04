import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./paginas/Home";
import YourLists from "./paginas/YourLists";
import InformationPage from "./paginas/InformationPage";
import AboutUs from "./paginas/AboutUs";
import Error404 from "./paginas/Error404";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import DragQueenCard from "./paginas/DragQueenCard";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import EpisodeCard from "./paginas/EpisodeCard";
import CreateQueen from "./paginas/CreateQueen";
import SeasonCard from "./paginas/SeasonCard";
import Error500 from "./paginas/Error500";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="App">
      <NavBar handleShow={handleShow} />
      <div>
        <Offcanvas
          id="sideBar"
          show={show}
          onHide={handleClose}
          style={{
            backgroundColor: "rgb(244, 250, 172)",
            textShadow: "5px 2px 5px rgb(19, 120, 187)",
          }}
        >
          <Offcanvas.Header
            style={{
              backgroundColor: "rgb(111, 224, 253)",
              borderRadius: "10px",
            }}
            closeButton
          >
            <Offcanvas.Title
              style={{ textAlign: "center", fontSize: "50px", color: "white" }}
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{ textAlign: "center", fontSize: "30px" }}>
              <li style={{ marginBottom: "40px" }}>
                <Link
                  to="/"
                  onClick={handleClose}
                  style={{
                    color: "rgb(111, 224, 253)",
                    textShadow: "2px 2px 2px rgb(50, 148, 228)",
                  }}
                >
                  Inicio
                </Link>
              </li>

              <li style={{ marginBottom: "40px" }}>
                <Link
                  to="/yourLists"
                  onClick={handleClose}
                  style={{
                    color: "rgb(111, 224, 253)",
                    textShadow: "2px 2px 2px rgb(50, 148, 228)",
                  }}
                >
                  Tus Favoritos
                </Link>
              </li>

              <li style={{ marginBottom: "40px" }}>
                <Link
                  to="/informationPage"
                  onClick={handleClose}
                  style={{
                    color: "rgb(111, 224, 253)",
                    textShadow: "2px 2px 2px rgb(50, 148, 228)",
                  }}
                >
                  Investiga!
                </Link>
              </li>

              <li style={{ marginBottom: "40px" }}>
                <Link
                  to="/aboutUs"
                  onClick={handleClose}
                  style={{
                    color: "rgb(111, 224, 253)",
                    textShadow: "2px 2px 2px rgb(50, 148, 228)",
                  }}
                >
                  Conócenos!
                </Link>
              </li>
              <li style={{ marginBottom: "40px" }}>
                <a
                  href="https://pablojvm.github.io/drag-for-the-crown/"
                  onClick={handleClose}
                  style={{
                    color: "rgb(111, 224, 253)",
                    textShadow: "2px 2px 2px rgb(50, 148, 228)",
                  }}
                >
                  Minijuego
                </a>
              </li>
            </ul>
            <img src="supreme.png" />
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/yourLists"
            element={<YourLists />}
          />
          <Route path="/informationPage" element={<InformationPage />} />
          <Route
            path="/informationPage/queens/:idDragQueen"
            element={<DragQueenCard />}
          />
          <Route path="/createQueen" element={<CreateQueen />} />
          <Route
            path="/informationPage/seasons/:idSeason"
            element={<SeasonCard />}
          />
          <Route
            path="/informationPage/episodes/:idEpisode"
            element={<EpisodeCard />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Error404 />} />
          <Route path="/500" element={<Error500 />} />

        </Routes>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default App;
