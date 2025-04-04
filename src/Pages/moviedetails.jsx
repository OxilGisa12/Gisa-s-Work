import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  // Fetch movie details based on the id
  return (
    <div className="p-8">
      <div className="bg-white rounded-lg p-6 text-black">
        <h1 className="text-3xl font-bold mb-4">Movie Details</h1>
        <p>Details for movie ID: {id}</p>
        {/* Add detailed movie information here */}
      </div>
    </div>
  );
}

export default MovieDetails;