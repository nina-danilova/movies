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

function MovieCard() {
  return (
    <StyledCard>
      <StyledImage src="#" height={91} width={60} alt="Movie poster" />
      <StyledInfo>
        <StyledShortInfo>
          <StyledTitle>The way back</StyledTitle>
          <StyledReleaseDate>March 5, 2020</StyledReleaseDate>
          <StyledGenreList>
            <StyledGenreItem>Action</StyledGenreItem>
            <StyledGenreItem>Drama</StyledGenreItem>
          </StyledGenreList>
        </StyledShortInfo>
        <StyledRating>6.6</StyledRating>
      </StyledInfo>
      <StyledAnnotation>
        A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts
        to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...
      </StyledAnnotation>
      <StarRating />
    </StyledCard>
  );
}

export default MovieCard;
