import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import { fetchMovies } from 'functions/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_KEY from '../../functions/api';

const Reviews = () => {
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
};

export default Reviews;
