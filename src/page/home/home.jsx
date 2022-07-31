import { getTrendingFilms } from '../../servises';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [totalList, setTotalList] = useState(null);

  useEffect(() => {
    getTrendingFilms().then(e => setTotalList(e.results));
  }, []);

  if (!totalList) {
    return;
  }

  return (
    <>
      <ul>
        {totalList.map(e => {
          return (
            <li key={e.id}>
              <Link
                to={`movies/${e.id}`}
                state={{ from: '/goit-react-hw-05-movies/' }}
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
