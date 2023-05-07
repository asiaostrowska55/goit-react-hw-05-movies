import { fetchMovies } from 'functions/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';
import { API_KEY } from '../../functions/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const movieId = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setLoader(true);
    const getCast = async () => {
      const response = await fetchMovies(URL);
      if (response) {
        setLoader(false);
        const castResults = [...response.cast];
        castResults.map(cast => ({
          id: cast.id,
          profile_path: cast.profile_path,
          name: cast.name,
          character: cast.character,
        }));
        setCast(castResults);
      } else {
        throw new Error('Error!');
      }
    };
    getCast();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast && cast.length ? (
          <>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                      : `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            ))}
          </>
        ) : (
          <p> Cast information is not available for this movie.</p>
        )}
      </ul>{' '}
    </>
  );
};

export default Cast;
