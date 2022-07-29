import { getFilmsSerch } from '../servises';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function PeintArrey({ arr }) {
  // переназвати назву пропса який приходить
  if (!arr || arr.results.length < 1) {
    return;
  }

  console.log(arr);
  // ций рендер можна винести в окремий компонетнт так як він є ще в Home

  return (
    <>
      <ul>
        {arr.results.map(e => {
          return (
            <li key={e.id}>
              <Link to={`${e.id}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function Movies() {
  const [serchFilm, setSetchFilm] = useState('');
  const [arraySerchFilm, setArraySerchFilm] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ params: serchFilm });
  }, [serchFilm]);

  useEffect(() => {
    if (!searchParams.get('params')) {
      return;
    }

    setSetchFilm(searchParams.get('params'));

    getFilmsSerch(searchParams.get('params')).then(setArraySerchFilm);
  }, []);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          getFilmsSerch(serchFilm).then(setArraySerchFilm);
        }}
      >
        <input tape="text" onChange={e => setSetchFilm(e.target.value)}></input>
        <button tape="submit">Serch</button>
      </form>

      <PeintArrey arr={arraySerchFilm} />
    </div>
  );
}
