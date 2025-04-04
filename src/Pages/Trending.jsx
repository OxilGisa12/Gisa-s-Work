import React, { useState, useEffect } from "react";
import CardContents from "../Component/CardContents.jsx";
import { fetchTrendingMovies } from "../api/movieService";

function Trending() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeWindow, setTimeWindow] = useState('week'); // 'day' or 'week'

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, [timeWindow]);

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
        <h1 className="font-bold text-3xl md:text-4xl mt-6 mb-4 text-green-700">Trending Movies</h1>
        <p className="ml-3 mt-3 text-gray-600">See what's popular right now</p>
      </div>

      <div className="flex justify-center gap-4 mt-6 mb-8">
        <button
          onClick={() => setTimeWindow('day')}
          className={`px-6 py-2 rounded-full ${
            timeWindow === 'day'
              ? 'bg-green-600 text-white'
              : 'bg-white text-green-600 hover:bg-green-100'
          } transition-colors duration-200`}
        >
          Today
        </button>
        <button
          onClick={() => setTimeWindow('week')}
          className={`px-6 py-2 rounded-full ${
            timeWindow === 'week'
              ? 'bg-green-600 text-white'
              : 'bg-white text-green-600 hover:bg-green-100'
          } transition-colors duration-200`}
        >
          This Week
        </button>
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

export default Trending;