import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Hey from '../assets/Hey.jpeg';

function Nav() {
  return (
    <nav className=" flex justify-between items-center p-3">
      <p className="font-bold text-2xl text-green-700 hover:text-red-200"><a href="#">Philly</a></p>
      <ul className="flex gap-5 mr-5">
        <li><Link to="/" className="font-bold text-lg text-green-700 hover:text-red-200">Home</Link></li>
        <li><Link to="/Genres" className="font-bold text-lg text-green-700 hover:text-red-200">Genres</Link></li>
        <li><Link to="/Trending" className="font-bold text-lg text-green-700 hover:text-red-200">Trending</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;