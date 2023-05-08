import { useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMovies, API_KEY } from 'functions/api';
import {} from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);

  const queryParams = useParams();
  const id = queryParams.movieId;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await fetchMovies(URL);
      setDetails(detailsResults);
    };
    getDetails();
  }, [URL]);

  return (
    <>
      <section className={css.wrapper}>
        {details.poster_path && (
          <img
            className={css.poster}
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`
            }
          />
        )}
        <article>
          <h2 className={css.title}>{details.title}</h2>
          <ul>
            <li>
              <h3> User rating: </h3>
              <span> ☆ {details.vote_average}</span>
            </li>
            <li>
              <h3>Genres: </h3>
              {details.genres !== undefined && (
                <span>{`${details.genres
                  .map(genre => genre.name)
                  .join(' | ')}`}</span>
              )}
            </li>
          </ul>
          <div className={css.overview}>
            <h3 className={css.overviewTitle}>Overview</h3>
            <p>{details.overview}</p>
          </div>
        </article>
      </section>
      <section>
        <h3 className={css.additional}>Additional information</h3>
        <div className={css.btn}>
          <Link to="cast">
            <button type="button">Cast</button>
          </Link>
          <Link to="reviews">
            <button type="button">Reviews</button>
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
