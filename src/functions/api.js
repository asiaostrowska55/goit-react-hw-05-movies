export const API_KEY = 'e6237ab11d37482483effc956909f434';

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
