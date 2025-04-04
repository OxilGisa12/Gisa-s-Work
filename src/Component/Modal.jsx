import React from 'react';

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{movie?.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[400px]"
              src={`https://www.youtube.com/embed/${movie?.trailerKey}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">Release Date: {movie?.releaseDate}</p>
            <p className="text-gray-600">Rating: {movie?.rating}/10</p>
            <p className="mt-2 text-gray-700">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 