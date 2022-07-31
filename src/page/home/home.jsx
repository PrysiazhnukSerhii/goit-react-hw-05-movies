import { getTrendingFilms } from '../../servises';
import { useState, useEffect } from 'react';
import { PeintListMovie } from '../../components/peintListMovie';

export function Home() {
  const [totalList, setTotalList] = useState(null);

  useEffect(() => {
    getTrendingFilms().then(e => setTotalList(e.results));
  }, []);

  if (!totalList) {
    return;
  }

  return <PeintListMovie arrFilm={totalList} linkPart="movies/" />;
}
