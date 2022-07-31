import { Home } from '../../page/home/home';
import { Movies } from '../../page/movies';
import { Container, StyledLink } from './App.stuled';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from '../movieDetails/movieDetails';
import { Cast } from '../cast/cast';
import { Reviews } from '../reviews/reviews';

// вирішити проблему з першим рендером  http://localhost:3000/goit-react-hw-05-movies

export const App = () => {
  return (
    <div>
      <Container>
        <nav>
          <StyledLink to="/goit-react-hw-05-movies/">Home</StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
        </nav>
      </Container>

      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:id"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
