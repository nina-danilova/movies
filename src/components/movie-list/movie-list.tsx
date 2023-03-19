import React from 'react';

import MovieCard from '../movie-card';

import StyledMovieList from './styled';

interface MovieListProps {
  movieList: object[];
}

function MovieList(props: MovieListProps) {
  const { movieList } = props;
  return (
    <StyledMovieList>
      {movieList &&
        movieList.length &&
        movieList.map((item) => {
          const cardKey = 1;
          return <MovieCard key={cardKey} movieInfo={item} />;
        })}
    </StyledMovieList>
  );
}

export default MovieList;
