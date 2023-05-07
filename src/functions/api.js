import axios from 'axios';

export const API_KEY = 'e6237ab11d37482483effc956909f434';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_PATH = 'https://image.tmdb.org/t/p/w300';

// export const fetchMovies = async url => {
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log('Error!', error);
//   }
// };

export const fetchMovies = url =>
  fetch(url)
    .then(resp => resp.json())
    .catch(error => console.log('fetchmovie error:', error));

// export const handleMoviesData = (response, movies) => {
//   response.forEach(movie => {
//     return movies.push({
//       movieID: movie.id,
//       movieTitle: movie.title,
//       movieBackdrop: IMG_PATH + movie.backdrop_path,
//     });
//   });
// };

// export const fetchMovieDetails = async id => {
//   const response = await fetchMovies(`/movies/${id}`);
//   if (response === null) {
//     return null;
//   }
//   const { poster_path, title, vote_average, overview, genres, tagline } =
//     response.data;
//   const details = {
//     posterPath: IMG_PATH + poster_path,
//     title,
//     voteAverage: vote_average,
//     overview,
//     genres,
//     tagline,
//   };
//   return details;
// };
