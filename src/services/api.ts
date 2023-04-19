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

const addRating = (movieId: number) => {
  const ratedMovieIds = localStorage.getItem('ratedMovieIds');
  const newRatedMoviesList = ratedMovieIds ? JSON.parse(ratedMovieIds) : [];
  const foundId = newRatedMoviesList.find((item) => item === movieId);
  if (foundId) {
    const index = newRatedMoviesList.indexOf(foundId);
    newRatedMoviesList.splice(index, 1);
  }
  newRatedMoviesList.push(movieId);
  localStorage.setItem('ratedMovieIds', JSON.stringify(newRatedMoviesList));
};

const findRating = (filmId) => {
  const ratedMovieIds = localStorage.getItem('ratedMovieIds');
  const ratedIdsList = ratedMovieIds ? JSON.parse(ratedMovieIds) : [];
  return ratedIdsList.find((item: number) => item === filmId);
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
  addRating(id);
  return result;
}

export { getMovieList, getGuestSession, getData, addRating, findRating, rateMovie };
