import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'functions/api';

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
          {children}
          {!!movie &&
            movie.map(({ movieId, movieTitle, movieBackdrop }) => (
              <MoviesElement
                key={movieId}
                movieTitle={movieTitle}
                movieBackdrop={movieBackdrop}
                to={'movies/' + movieId}
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
