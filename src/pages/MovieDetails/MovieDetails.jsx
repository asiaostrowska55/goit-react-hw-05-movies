import { useEffect, useState, Suspense } from 'react';
import css from './MovieDetails.module.css';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from '../../App.styled';
import { fetchMovieDetails } from 'functions/api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetchMovieDetails(id);
      if (response === null) {
        setMovieDetails('');
      } else {
        setMovieDetails(response);
      }
    };
    fetchDetails();
  }, [id]);

  let genres = [...movieDetails.genres].map(genre => genre.name).join(', ');

  return (
    <main>
      <div>
        <Link to={backLinkHref} className={css.movieLink}>
          &lt; Go back
        </Link>
        <div>
          <img src={movieDetails.poster_path} alt={movieDetails.title}></img>
          <div className={css.movieDesc}>
            <h1 className={css.movieDescTitle}>{movieDetails.title}</h1>
            <span className={css.movieDescInfo}>
              User Score: {movieDetails.voteAverage}{' '}
            </span>
            <h2 className={css.movieDescCategory}>Overview</h2>
            <span className={css.movieDescInfo}>{movieDetails.overview}</span>
            <h2 className={css.movieDescCategory}>Genres</h2>
            <span className={css.movieDescInfo}>{genres}</span>
          </div>
        </div>
        <section>
          <span>Additional information:</span>
          <ul className={css.movieOthersList}>
            <li className={css.movieOthersListItem}>
              <Link
                to="cast"
                className={css.movieOthersListLink}
                state={{ from: location.state.from }}
              >
                Cast
              </Link>
            </li>
            <li className={css.movieOthersListItem}>
              <Link
                to="reviews"
                className={css.movieOthersListLink}
                state={{ from: location.state.from }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </main>
  );
};
export default MovieDetails;

{
  /* <ul className={[css.movie__genres]}>
            {genres.map((genre, index) => (
              <li key={genre.id}>
                {genre.name}
                {index !== genres.length - 1 ? ',' : ''}
              </li>
            ))}
          </ul> */
}
