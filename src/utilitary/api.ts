async function getMovieList(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  return res.json();
}

export default getMovieList;
