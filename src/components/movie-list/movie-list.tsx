import React from 'react';

import { MovieCard } from '../movie-card';

import { StyledMovieList } from './styled';

type MovieProps = {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
  rating: number;
  genre_ids: number[];
};

type MovieListProps = {
  movieList: MovieProps[];
};

export const MovieList: React.FC<MovieListProps> = (props) => {
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
};
