import React, { useState, useEffect } from "react";
import CardContents from "../Component/CardContents.jsx";
import { fetchMovies } from "../api/movieService";

function Genres() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(28); // Default to Action genre

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
  ];

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        const data = await fetchMovies(`/discover/movie?with_genres=${selectedGenre}`);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching genre movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreMovies();
  }, [selectedGenre]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-green-100 min-h-screen py-10 px-4">
      <div className="text-center">
        <h1 className="font-bold text-3xl md:text-4xl mt-6 mb-4 text-green-700">Movie Genres</h1>
        <p className="ml-3 mt-3 text-gray-600">Explore movies by genre</p>
             </div>

      <div className="flex flex-wrap justify-center gap-2 mt-6 mb-8">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`px-4 py-2 rounded-full ${
              selectedGenre === genre.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 hover:bg-green-100'
            } transition-colors duration-200`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
                     <CardContents 
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Genres;