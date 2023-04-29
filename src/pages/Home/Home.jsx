import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'functions/api';
import MovieElement from 'components/MovieElement/MovieElement';

const Home = ({ children }) => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies();
      if (response === null) {
        setMovie([]);
      } else {
        setMovie(response);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <div>
        <h2>Trending today</h2>
        <ul>
          {movie.map(({ movieId, movieTitle, movieBackdrop }) => (
            <MovieElement
              key={movieId}
              movieTitle={movieTitle}
              movieBackdrop={movieBackdrop}
              to={'/movies/' + movieId}
              from={location}
              movieID={movieId}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
