import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      {/* use Link or NavLink ? */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path="/movies/:movieID/*" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews
