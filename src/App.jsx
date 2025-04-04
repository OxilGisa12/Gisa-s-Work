import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/TailwindNavBarPractise";
import Body from "./Component/TailWindMainSection";
import Booter from "./Component/TailWindFooterPractise";
import Genres from "./Pages/genres.jsx";
import Trending from "./Pages/Trending.jsx";
import Partners from "../src/Pages/partners.jsx";
import Location from "../src/Pages/location.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-green-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Genres" element={<Genres />} />
        </Routes>
        
        <Booter />
                
      </div>
    </BrowserRouter>
  );
}

export default App;