import { getFilmsSerch } from '../servises';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PeintListMovie } from '../components/peintListMovie';

export function Movies() {
  const [serchFilm, setSetchFilm] = useState('');
  const [arraySerchFilm, setArraySerchFilm] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('params')) {
      return;
    }

    setSetchFilm(searchParams.get('params'));

    getFilmsSerch(searchParams.get('params')).then(setArraySerchFilm);
  }, [searchParams]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ params: serchFilm });
          getFilmsSerch(serchFilm).then(setArraySerchFilm);
        }}
      >
        <input
          tape="text"
          value={serchFilm}
          onChange={e => setSetchFilm(e.target.value)}
        ></input>
        <button tape="submit">Serch</button>
      </form>

      {arraySerchFilm && <PeintListMovie arrFilm={arraySerchFilm.results} />}
    </div>
  );
}
