import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../page/home/home';
import { Movies } from '../../page/movies';
import { Container, StyledLink } from './App.stuled';
// import { MovieDetails } from '../movieDetails/movieDetails';
// import { Cast } from '../cast/cast';
import { Reviews } from '../reviews/reviews';

const MovieDetails = lazy(() =>
  import('../movieDetails/movieDetails').then(module => ({
    ...module,
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('../cast/cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

export const App = () => {
  return (
    <div>
      <Container>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Container>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
