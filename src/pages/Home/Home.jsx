import { useState, useEffect } from 'react';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'functions/api';
import { API_KEY } from '../../functions/api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchTrendingMovies = async () => {
    setLoader(true);
    const response = await fetchMovies(BASE_URL);

    if (response) {
      setLoader(false);
      const trending = [...response.results];
      return trending.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));
    } else {
      throw new Error('Error! Home page');
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetchTrendingMovies();
      setMovies(response);
    };
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <div>
        <h2>Movies trending today</h2>
        <ul>
          {loader ? (
            <Loader />
          ) : (
            movies &&
            movies.length &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link className={css.link} to={`/movies/${id}`}>
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
