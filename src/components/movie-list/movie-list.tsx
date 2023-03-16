import React from 'react';

import MovieCard from '../movie-card';

import StyledMovieList from './styled';

function MovieList() {
  return (
    <StyledMovieList>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </StyledMovieList>
  );
}

export default MovieList;
