import { useParams } from 'react-router-dom';
import { getCast } from '../../servises';
import { useState, useEffect } from 'react';

export function Cast() {
  const [actors, setActors] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(e => setActors(e.cast));
  }, [id]);

  if (!actors) {
    return;
  }

  return (
    <div>
      <ul>
        {actors.map(e => {
          return (
            <li key={e.name}>
              {e.profile_path && (
                <img
                  width="170"
                  className="gallery__poster"
                  src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                  alt={e.name}
                />
              )}
              <p>{e.name}</p>
              <p>Character: {e.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
