import React from 'react';

import StarRating from '../star-rating';

import {
  StyledCard,
  StyledInfo,
  StyledImage,
  StyledShortInfo,
  StyledTitle,
  StyledReleaseDate,
  StyledAnnotation,
  StyledGenreList,
  StyledGenreItem,
  StyledRating,
} from './styled';

interface MovieInfoProps {
  backdrop_path?: string;
  title?: string;
  release_date?: string;
  vote_average?: number;
  overview?: string;
}

interface MovieCardProps {
  movieInfo: MovieInfoProps;
}

function MovieCard(props: MovieCardProps) {
  const { movieInfo } = props;
  return (
    <StyledCard>
      <StyledImage src={movieInfo.backdrop_path} height={91} width={60} alt="Movie poster" />
      <StyledInfo>
        <StyledShortInfo>
          <StyledTitle>{movieInfo.title}</StyledTitle>
          <StyledReleaseDate>{movieInfo.release_date}</StyledReleaseDate>
          <StyledGenreList>
            <StyledGenreItem>Action</StyledGenreItem>
            <StyledGenreItem>Drama</StyledGenreItem>
          </StyledGenreList>
        </StyledShortInfo>
        <StyledRating>{movieInfo.vote_average}</StyledRating>
      </StyledInfo>
      <StyledAnnotation>{movieInfo.overview}</StyledAnnotation>
      <StarRating />
    </StyledCard>
  );
}

export default MovieCard;
