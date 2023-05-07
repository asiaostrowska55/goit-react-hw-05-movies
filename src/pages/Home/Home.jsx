import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { fetchMovies } from 'functions/api';
import { fetchMovies } from 'functions/api';

const Home = () => {
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=e6237ab11d37482483effc956909f434`;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    setIsLoading(true);
    const response = await fetchMovies(BASE_URL);

    if (response) {
      setIsLoading(false);
      const trending = [...response.results];
      return trending.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));
    } else {
      throw new Error('Error!');
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies();
      setMovies(response);
    };
    fetchMovies();
  }, []);

  return (
    <main>
      <div>
        <h2>Trending today</h2>
        <ul>
          {isLoading ? (
            <Loader />
          ) : (
            movies &&
            movies.length &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <p>{title}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
};

export default Home;
