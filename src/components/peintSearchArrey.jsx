import { Link } from 'react-router-dom';

export function PeintSearchArrey({ arrFilm, params }) {
  if (!arrFilm || arrFilm.results.length < 1) {
    return;
  }

  return (
    <>
      <ul>
        {arrFilm.results.map(e => {
          return (
            <li key={e.id}>
              <Link
                to={`${e.id}`}
                state={{ from: `/goit-react-hw-05-movies/movies?${params}` }}
              >
                {e.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
