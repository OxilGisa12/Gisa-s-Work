import React, { useState } from 'react';
import Modal from './Modal';
import { fetchMovieDetails, fetchMovieTrailer } from '../api/movieService';

function CardContents({ id, title, poster, rating, releaseDate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = async () => {
    setIsLoading(true);
    try {
      const [details, trailerKey] = await Promise.all([
        fetchMovieDetails(id),
        fetchMovieTrailer(id)
      ]);

      if (details) {
        setMovieDetails({
          ...details,
          trailerKey: trailerKey || 'dQw4w9WgXcQ' // Fallback trailer if none found
        });
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
        onClick={handleCardClick}
      >
        <div className="relative">
          <img 
            src={poster || 'https://via.placeholder.com/300x450?text=No+Poster'} 
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-sm">
            {rating?.toFixed(1) || 'N/A'}
          </div>
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{title}</h3>
          <p className="text-sm text-gray-600">{releaseDate}</p>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        movie={movieDetails}
      />
    </>
  );
}

export default CardContents;
