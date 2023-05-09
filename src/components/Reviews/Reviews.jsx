import Loader from 'components/Loader/Loader';
import { fetchMovies } from 'functions/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../functions/api';

import parse from 'html-react-parser';

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
        throw new Error('Error in Reviews');
      }
    };
    getReviews();
  }, [URL]);

  const parse = require('html-react-parser');

  return (
    <>
      {loader && <Loader />}
      <ul>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li style={{ listStyle: 'circle' }} key={id}>
              <h3>Author: {author}</h3>
              <p>{parse(content)}</p>
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

// dangerouslySetInnerHTML={{__html: }}
