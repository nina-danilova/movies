async function getMovieList(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw Error('getMovieList - response status not 200');
}

async function getGuestSession(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw Error('getGuestSessionId - response status not 200');
}

export { getMovieList, getGuestSession };
