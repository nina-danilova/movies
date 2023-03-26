async function getMovieList(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  throw Error('response status not 200');
}

export default getMovieList;
