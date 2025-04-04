import { API_KEY, BASE_URL, IMAGE_BASE_URL } from './config';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '',
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      overview: movie.overview
    }));
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return {
      id: data.id,
      title: data.title,
      poster: data.poster_path ? `${IMAGE_BASE_URL}${data.poster_path}` : '',
      rating: data.vote_average,
      releaseDate: data.release_date,
      overview: data.overview
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovieTrailer = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie trailer');
    }
    const data = await response.json();
    const trailer = data.results.find(video => video.type === 'Trailer');
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};

export const fetchUpcomingMovies = () => {
  return fetchMovies('/movie/upcoming?');
};

export const fetchTrendingMovies = (timeWindow = 'week') => {
  return fetchMovies(`/trending/movie/${timeWindow}?`);
};

export const fetchGenreMovies = (genreId) => {
  return fetchMovies(`/discover/movie?with_genres=${genreId}&`);
}; 