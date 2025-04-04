import React from 'react';

function MovieCard({ title, poster, rating, releaseDate, overview }) {
  return (
    <div className="w-56 h-72 rounded overflow-hidden shadow-lg bg-white"> {/* Adjusted width and height */}
      <img className="w-full h-32 object-cover" src={poster} alt={title} /> {/* Adjusted image height */}
      <div className="px-4 py-3"> {/* Adjusted padding */}
        <div className="font-bold text-lg mb-1">{title}</div> {/* Adjusted font size and margin */}
        <p className="text-gray-700 text-sm"> {/* Adjusted font size */}
          {overview && overview.length > 100 ? `${overview.substring(0, 100)}...` : overview} {/* Adjusted overview length */}
        </p>
      </div>
      <div className="px-4 pt-2 pb-1 flex justify-between items-center"> {/* Adjusted padding */}
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-1"> {/* Adjusted padding and font size */}
          Rating: {rating}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mb-1"> {/* Adjusted padding and font size */}
          {releaseDate}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;