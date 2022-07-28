import { Home } from '../../../page/home/home';
import { Movies } from '../../../page/movies';
import { Container, StyledLink } from './App.stuled';
import { Routes, Route, Outlet } from 'react-router-dom';
import { MovieDetails } from '../movieDetails/MovieDetails';

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
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <Outlet />
    </div>
  );
};
