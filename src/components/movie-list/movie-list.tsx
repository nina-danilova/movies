import React from 'react';

import MovieCard from '../movie-card';

import StyledMovieList from './styled';

interface MovieProps {
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

interface MovieListProps {
  movieList: MovieProps[];
}

function MovieList(props: MovieListProps) {
  const { movieList } = props;
  return (
    <StyledMovieList>
      {movieList &&
        movieList.length &&
        movieList.map((item) => {
          return <MovieCard key={item.id} movieInfo={item} />;
        })}
    </StyledMovieList>
  );
}

export default MovieList;
