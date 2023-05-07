import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import { fetchMovies } from 'functions/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../functions/api';

const Reviews = () => {
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    setLoader(true);
    const getReviews = async () => {
      const response = await fetchMovies(URL);
      if (response) {
        setLoader(false);
        const results = [...response.results];
        results.map(review => ({
          content: review.content,
          author: review.author,
          id: review.id,
        }));
        setReviews(results);
      } else {
        throw new Error('Error!');
      }
    };
    getReviews();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <h2>Reviews</h2>
      <ul>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
