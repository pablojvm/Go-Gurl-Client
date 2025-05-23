import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourLists" element={<YourLists />} />
        <Route path="/informationPage" element={<InformationPage />} />
        <Route path="/informationPage/:idDragQueen" element="" />
        <Route path="/informationPage/:idSeason" element="" />
        <Route path="/informationPage/:idChapter" element="" />
        <Route path="/aboutUs" element={<AboutUs />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
