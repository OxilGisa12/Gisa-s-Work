import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Component/TailwindNavBarPractise";
import Body from "./Component/TailWindMainSection";
import Booter from "./Component/TailWindFooterPractise";
// import Genres from "./Pages/Genres";
import Trending from "./Pages/Trending";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="bg-green-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/trending" element={<Trending />} />
          {/* <Route path="/genres" element={<Genres />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Booter />
      </div>
    </BrowserRouter>
  );
}

export default App;