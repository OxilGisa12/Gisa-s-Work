import React from 'react';
import Card from './Card'; // Corrected import

export default function Body() {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      poster: '/Cover.jpeg',
      rating: '9.3',
      releaseDate: '1994-09-23',
      overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      id: 2,
      title: 'Magic Bean',
      image: '',
      year: 2019,
      rating: 8,
    },
    {
      id: 3,
      title: 'Bielding',
      image: '',
      year: 2020,
      rating: 9,
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Added grid layout for cards */}
      {movies.map((movie) => (
        <Card // Corrected component name to Card
          key={movie.id || movie.title} // Added a unique key for each card
          title={movie.title}
          poster={movie.poster || movie.image} // Handle image/poster differences
          rating={movie.rating}
          releaseDate={movie.releaseDate || movie.year} // Handle date/year differences
          overview={movie.overview}
        />
      ))}

    </div>
    
  );
}