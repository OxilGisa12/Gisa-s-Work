import React from "react";
import { Link } from "react-router-dom";

function MovieList() {
  // Replace with actual movie data
  const movies = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg p-6 text-black">
        <h1 className="text-3xl font-bold mb-4">Movie List</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className="mb-2">
              <Link to={`/movies/${movie.id}`} className="text-red-500 hover:text-red-300">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieList;