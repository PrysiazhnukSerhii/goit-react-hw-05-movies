import { Home } from '../../page/home/home';
import { Movies } from '../../page/movies';
import { Container, StyledLink } from './App.stuled';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from '../movieDetails/MovieDetails';
import { Cast } from '../cast/cast';
import { Reviews } from '../reviews/reviews';

// вирішити проблему з першим рендером  http://localhost:3000/goit-react-hw-05-movies

export const App = () => {
  return (
    <div>
      <Container>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
