import React, { useState, useEffect } from "react";
import CardContents from "./CardContents.jsx";
import { fetchUpcomingMovies, fetchTrendingMovies } from "../api/movieService";

function Body() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const upcoming = await fetchUpcomingMovies();
        const trending = await fetchTrendingMovies();
        setUpcomingMovies(upcoming);
        setTrendingMovies(trending);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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
        <h1 className="font-bold text-3xl md:text-4xl mt-6 mb-4 text-green-700">Philly Home Of All Movies</h1>
        <p className="ml-3 mt-3 text-gray-600">Explore the latest Movies And Best Movies Of All Times</p>
      </div>
      <hr className="w-4/5 mx-auto mt-12 border-gray-300 shadow-md" />
      <p className="ml-3 mt-3 text-gray-600">Upcoming Movies</p>
      <hr className="mt-3 w-30 ml-4 border-gray-300"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {upcomingMovies.map((movie) => (
          <CardContents 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
      <hr className="w-4/5 mx-auto mt-12 border-gray-300 shadow-md" />
      <p className="ml-3 mt-3 text-gray-600">Trending Movies</p>
      <hr className="mt-3 w-30 ml-4 border-gray-300"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {trendingMovies.map((movie) => (
          <CardContents 
            key={movie.id}
            id={movie.id}
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

export default Body;