import { getTrendingFilms } from '../../servises';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// подивитись за ці срані стилі вони говно якесь
//в функції назву пропса подумати

export function Home() {
  const [totalList, setTotalList] = useState(null);
  // вирішити з цею змінною через стейт? не лишній він якщо можна просто змінну?
  useEffect(() => {
    getTrendingFilms().then(e => setTotalList(e.results));
  }, []);

  // якась корява функція получається з цим сраним ретурном
  if (!totalList) {
    return;
  }

  // const navigate = useNavigate();

  return (
    <>
      <ul>
        {totalList.map(e => {
          return (
            <li key={e.id}>
              <Link to={`movies/${e.id}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* <Routes>
        {totalList.map(e => {
          return (
            <>
              <Route path="/movies" element={<Movies />} />
            </>
          );
        })}
      </Routes> */}
    </>
  );
}
