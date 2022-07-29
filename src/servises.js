const KEY = 'ce215f5f1c8b0b3d73c2aaf02c08ca0e';

// може не виности в окрему змінну трендінг
let trendingFilm = 'trending/movie/day';
//зараз тут буду виносити результать фетч, подумати може його в функцію вставити щоб зен був там
export function getTrendingFilms() {
  return fetch(
    `https://api.themoviedb.org/3/${trendingFilm}?api_key=${KEY}`
  ).then(respons => respons.json());
}

export function getMovieDetails(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  ).then(respons => respons.json());
}

export function getFilmsSerch(name) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`
  ).then(respons => respons.json());
}

export function getCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(respons => respons.json());
}
