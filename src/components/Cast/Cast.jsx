import { fetchMovies } from 'functions/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';
import { API_KEY } from '../../functions/api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setLoader(true);

    const getCast = async () => {
      const castResults = await fetchMovies(URL);
      if (castResults) {
        setLoader(false);
        const results = [...castResults.cast];
        const uniqueResults = results.filter((item, index) => {
          return results.findIndex(obj => obj.id === item.id) === index;
        });
        setCast(uniqueResults);
        // results.map(cast => ({
        //   id: cast.id,
        //   profile_path: cast.profile_path,
        //   name: cast.name,
        //   character: cast.character,
        // }));
        // setCast(results);
      } else {
        throw new Error('Error in Cast');
      }
    };
    getCast();
  }, [URL]);

  return (
    <>
      {loader && <Loader />}
      <ul className={css.castList}>
        {cast && cast.length ? (
          <>
            {cast.map(({ id, profile_path, name, character }) => (
              <li className={css.castEl} key={id}>
                <img
                  className={css.castImg}
                  src={
                    profile_path
                      ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                      : `https://web.natur.cuni.cz/zoology/eei/wp-content/uploads/2021/04/no_image_portrait.jpg`
                  }
                  alt={name}
                />
                <h3 className={css.name}>{name}</h3>
                <p className={css.character}>Character: {character}</p>
              </li>
            ))}
          </>
        ) : (
          <p>Cast information is not available for this movie.</p>
        )}
      </ul>{' '}
    </>
  );
};

export default Cast;
