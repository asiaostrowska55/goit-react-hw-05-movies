import css from './Movies.module.css';
import { useState } from 'react';
import { fetchMovies } from 'functions/api';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix';
import API_KEY from '../../functions/api';

const Movies = () => {
  const [value, setValue] = useState('');
  const [loader, setLoader] = useState(false);
  const movies = useState([]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = async event => {
    setIsLoading(true);
    event.preventDefault();
    event.currentTarget.reset();
    if (value.trim() === '') {
      setLoader(false);
    }
    const movieList = await fetchMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`
    );
    if (movieList.response.length === 0) {
      setLoader(false);
      return Notify.info(
        'There are no movie titles that match your search criteria. Please try with different title'
      );
    }
    if (movieList) {
      setLoader(false);
      const response = [...movieList.response];
      response.map(movie => ({
        title: movie.title,
        id: movie.id,
      }));
      response.forEach(result => {
        movies.push({
          movieId: result.id,
          movieTitle: result.title,
        });
      });
    } else {
      throw new Error('Error!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput" />{' '}
      <input id="searchInput" type="text" onChange={handleChange} />
      <button type="submit">Search</button>
      <ul>
        {loader ? (
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
