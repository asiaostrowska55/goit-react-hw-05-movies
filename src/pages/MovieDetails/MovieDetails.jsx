import { useEffect, useState, Suspense } from 'react';
import css from './MovieDetails.module.css';
import { useParams, useLocation } from 'react-router-dom';
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
  return (
    <div>
      <Link to={backLinkHref} className={css.movieLink}>
        &lt; Go back
      </Link>
    </div>
  );
};
export default MovieDetails;
