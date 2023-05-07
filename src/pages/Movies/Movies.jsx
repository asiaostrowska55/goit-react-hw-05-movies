import css from './Movies.module.css';
import { useState } from 'react';
import { fetchMovies } from 'functions/api';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix';
import { API_KEY } from '../../functions/api';

const Movies = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies] = useState([]);

  const handleSubmit = async event => {
    setIsLoading(true);
    event.preventDefault();
    event.currentTarget.reset();
    if (value.trim() === '') {
      setIsLoading(false);
      return Notify.info('Please provide a query');
    }
    const movieList = await fetchMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`
    );
    if (movieList.results.length === 0) {
      setIsLoading(false);
      movies.length = 0;
      return Notify.info(
        'We could not find the movie you are looking for. Please try another title.'
      );
    }
    if (movieList) {
      setIsLoading(false);
      const results = [...movieList.results];
      results.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));

      movies.length = 0;

      results.forEach(result => {
        movies.push({
          movieId: result.id,
          movieTitle: result.title,
        });
      });
    } else {
      throw new Error('Error in Movies page');
    }
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput" />{' '}
      <input id="searchInput" type="text" onChange={handleChange} />
      <button type="submit">Search</button>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          movies.length !== 0 &&
          movies.map(movie => (
            <li key={movie.movieId}>
              <Link to={`/movies/${movie.movieId}`}>
                <p>{movie.movieTitle}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </form>
  );
};

export default Movies;
