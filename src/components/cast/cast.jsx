import { useParams } from 'react-router-dom';
import { getCast } from '../../servises';
import { useState, useEffect } from 'react';

export function Cast() {
  const [actors, setActors] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(e => setActors(e.cast));
  }, []);

  if (!actors) {
    return;
  }

  return (
    <div>
      <ul>
        {actors.map(e => {
          return (
            <>
              <img
                width="170"
                className="gallery__poster"
                src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                alt="Poster for film ${original_title}"
              />
              <li>{e.name}</li>
              <p>Character: {e.character}</p>
            </>
          );
        })}
      </ul>
    </div>
  );
}
