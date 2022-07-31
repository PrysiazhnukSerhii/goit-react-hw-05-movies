import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function PeintListMovie({ arrFilm, linkPart = '' }) {
  const location = useLocation();

  if (arrFilm.length < 1) {
    return;
  }

  return (
    <>
      <ul>
        {arrFilm.map(e => {
          return (
            <li key={e.id}>
              <Link to={`${linkPart}${e.id}`} state={{ from: location }}>
                {e.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
