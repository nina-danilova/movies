import React from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

import StarRating from '../star-rating';
import truncateText from '../../utilitary/truncate-text';

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
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface MovieCardProps {
  movieInfo: MovieInfoProps;
}

function MovieCard(props: MovieCardProps) {
  const { movieInfo } = props;
  const {
    backdrop_path: backdropPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview,
  } = movieInfo;

  let date = Date.parse(releaseDate);
  if (Number.isNaN(date)) {
    date = 0;
  }
  const EngbReleaseDate = format(new Date(date), 'MMMM d, yyyy', { locale: enGB });

  const truncatedOverview = truncateText(overview);
  return (
    <StyledCard>
      <StyledImage src={backdropPath} height={91} width={60} alt="Movie poster" />
      <StyledInfo>
        <StyledShortInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledReleaseDate>{EngbReleaseDate}</StyledReleaseDate>
          <StyledGenreList>
            <StyledGenreItem>Action</StyledGenreItem>
            <StyledGenreItem>Drama</StyledGenreItem>
          </StyledGenreList>
        </StyledShortInfo>
        <StyledRating>{voteAverage}</StyledRating>
      </StyledInfo>
      <StyledAnnotation>{truncatedOverview}</StyledAnnotation>
      <StarRating />
    </StyledCard>
  );
}

export default MovieCard;
