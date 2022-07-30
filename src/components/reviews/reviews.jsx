import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from '../../servises';

export function Reviews() {
  const [reviews, setReviews] = useState();
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(e => setReviews(e.results));
  }, [id]);

  if (!reviews || reviews.length < 1) {
    return <p>We dont have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(e => (
        <li key={e.author}>
          <b>Autor: {e.author}</b>
          <p>{e.content}</p>
        </li>
      ))}
    </ul>
  );
}
