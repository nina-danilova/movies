import { apiKey } from '../utilitary/constants';

async function getMovieList(url: string) {
  const response = await fetch(url);
  if (response.status < 300) {
    const data = await response.json();
    return data;
  }
  throw Error(`getMovieList - received ${response.status}`);
}

async function getGuestSession(url: string) {
  const response = await fetch(url);
  if (response.status < 300) {
    const data = await response.json();
    return data;
  }
  throw Error(`getGuestSessionId - received ${response.status}`);
}

async function getData(url: string) {
  const response = await fetch(url);
  if (response.status < 300) {
    const data = await response.json();
    return data;
  }
  throw Error(`getData - received ${response.status}`);
}

const addRating = (movieId: number, value: number) => {
  const ratedMovieList = localStorage.getItem('ratedMovieList');
  const newRatedMovieList = ratedMovieList ? JSON.parse(ratedMovieList) : [];
  const foundId = newRatedMovieList.find((item) => item.id === movieId);
  if (foundId) {
    const index = newRatedMovieList.indexOf(foundId);
    newRatedMovieList.splice(index, 1);
  }
  const ratedMovieData = {
    id: movieId,
    value,
  };
  newRatedMovieList.push(ratedMovieData);
  localStorage.setItem('ratedMovieList', JSON.stringify(newRatedMovieList));
};

const findRating = (filmId: number) => {
  const ratedMovieList = localStorage.getItem('ratedMovieList');
  const ratedList = ratedMovieList ? JSON.parse(ratedMovieList) : [];
  const result = ratedList.find((item) => item.id === filmId);
  return result;
};

async function rateMovie(value: number, id: number): Promise<void> {
  const guestSessionId = localStorage.getItem('guestSessionId');
  const requestBody = {
    value,
  };
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}/rating?api_key=${apiKey}&guest_session_id=${guestSessionId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(requestBody),
    }
  );

  const result = await response.json();
  addRating(id, value);
  return result;
}

const getGenreName = (genreId, genreList) => {
  const genreName = genreList.find((genreItem) => genreItem.id === genreId);
  return genreName;
};

export { getMovieList, getGuestSession, getData, addRating, findRating, rateMovie, getGenreName };
