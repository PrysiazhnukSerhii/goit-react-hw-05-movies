import { getTrendingFilms } from '../../servises';
import { useState, useEffect } from 'react';
import { PeintMovieArrey } from '../../components/peintMovieArrey';

export function Home() {
  const [totalList, setTotalList] = useState(null);

  useEffect(() => {
    getTrendingFilms().then(e => setTotalList(e.results));
  }, []);

  if (!totalList) {
    return;
  }

  return <PeintMovieArrey arrFilm={totalList} linkPart="movies/" />;
}
