import React from 'react';
import css from './MovieElement.module.css';
import { Link } from './App.styled';

export const MoviesElement = ({
  movieID,
  movieTitle,
  to,
  from,
  movieBackdrop,
}) => {
  return (
    <div key={movieID}>
      <Link className={css.element} to={`${to}`} state={{ from: from }}>
        <img className={css.backdrop} src={movieBackdrop} alt={movieTitle} />
        <p className={css.name}>{movieTitle}</p>
      </Link>
    </div>
  );
};
