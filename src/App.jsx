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

function App() {

  const [sideBar, setSideBar] = useState(false)

  return (
    <div id="App">
      <NavBar toggleSideBar={() => setSideBar(!sideBar)}/>
      <div>
        <SideBar visible={sideBar} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yourLists" element={<YourLists />} />
          <Route path="/informationPage" element={<InformationPage id="information"/>} />
          <Route path="/informationPage/:idDragQueen" element="" />
          <Route path="/informationPage/:idSeason" element="" />
          <Route path="/informationPage/:idChapter" element="" />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
