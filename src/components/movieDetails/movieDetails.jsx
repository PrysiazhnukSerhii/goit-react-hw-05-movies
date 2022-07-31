import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../servises';
import {
  Container,
  Box,
  AditionalContainer,
  GoBackButton,
  Span,
} from './movieDetails.stuled';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '../../image/arrowLeft';

export function MovieDetails() {
  const [totalMovie, setTotalMovie] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(id).then(e => setTotalMovie(e));
  }, [id]);

  const { release_date, original_title, overview, vote_average, genres } =
    totalMovie;

  if (totalMovie === '') {
    return;
  }

  const takeGenres = genres.map(e => e.name).join(', ');

  const userScore = Math.ceil(10 * vote_average);
  const date = release_date.slice(0, 4);

  return (
    <>
      <GoBackButton to={backLinkHref}>
        {ArrowLeft} <Span>Go back</Span>
      </GoBackButton>

      <Container>
        <img
          width="200"
          src={`https://image.tmdb.org/t/p/w500/${totalMovie.poster_path}`}
          alt={totalMovie.title}
        />

        <Box>
          <h2>
            {original_title}({date})
          </h2>
          <p>User Score: {userScore}% </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{takeGenres}</p>
        </Box>
      </Container>
      <AditionalContainer>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AditionalContainer>

      <Outlet />
    </>
  );
}
