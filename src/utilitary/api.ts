async function getMovieList(url: string) {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return `Response code ${response.status}`;
}

export default getMovieList;
