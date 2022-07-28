import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../servises';
import { Container } from './movieDetails.stuled';

export function MovieDetails() {
  const [totalMovie, setTotalMovie] = useState('');
  const { id } = useParams();

  //  норм назвати змінну якщо не додумаюсь зробити  краще/ попробувати написати фетч прямо в змінній/ хер його зан кажись норм пока, буде час то можна попробувати щось подумати

  useEffect(() => {
    getMovieDetails(id).then(e => setTotalMovie(e));
  }, []);

  // картинка сука приходить пізніше, треба під неї зробити щоб зразу було зарезервоване місце

  const { release_date, original_title, overview, popularity, vote_average } =
    totalMovie;

  // з цею датою така махінація не дуже нравиться
  let date = '';
  if (release_date) {
    date = release_date.slice(0, 4);
  }

  let userScore = Math.ceil(10 * vote_average);
  return (
    <Container>
      <img
        width="200"
        className="gallery__poster"
        src={`https://image.tmdb.org/t/p/w500/${totalMovie.poster_path}`}
        alt="Poster for film ${original_title}"
      />
      <div>
        <h2>
          {original_title}({date})
        </h2>
        <p>User Score: {userScore}% </p>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
    </Container>
  );
}
