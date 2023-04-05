import React from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

import StarRating from '../star-rating';
import truncateText from '../../utilitary/truncate-text';
import { Consumer } from '../context';

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
  id: number;
  rating: number;
  genre_ids: number[];
}

interface MovieCardProps {
  movieInfo: MovieInfoProps;
}

interface GenreListType {
  id: number;
  name: string;
}

type IType = GenreListType[];

function MovieCard(props: MovieCardProps) {
  const { movieInfo } = props;
  const {
    backdrop_path: backdropPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview,
    id,
    rating,
    genre_ids: genreIds,
  } = movieInfo;

  let date = Date.parse(releaseDate);
  if (Number.isNaN(date)) {
    date = 0;
  }
  const EngbReleaseDate = format(new Date(date), 'MMMM d, yyyy', { locale: enGB });

  const truncatedOverview = truncateText(overview);
  let ratingBorderColor = 'black';
  if (voteAverage <= 3) {
    ratingBorderColor = '#E90000';
  } else if (voteAverage <= 5) {
    ratingBorderColor = '#E97E00';
  } else if (voteAverage <= 7) {
    ratingBorderColor = '#E9D100';
  } else {
    ratingBorderColor = '#66E900';
  }

  async function rateMovie(value: number): Promise<void> {
    const requestBody = {
      value,
    };
    const response = await fetch(
      `
      https://api.themoviedb.org/3/movie/${id}/rating?api_key=f45b7772c51af33c0a94a6cb415a0307&guest_session_id=bc2568d0fc8ee9f297cb4bf6b1bebcf4`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(requestBody),
      }
    );

    const result = await response.json();
    return result;
  }

  return (
    <StyledCard>
      <StyledImage src={backdropPath} height={91} width={60} alt="Movie poster" />
      <StyledInfo>
        <StyledShortInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledReleaseDate>{EngbReleaseDate}</StyledReleaseDate>
          <Consumer>
            {(genreList: IType) => {
              return (
                <StyledGenreList>
                  {genreIds.map((item) => {
                    const genreFound = genreList.find((genreItem) => genreItem.id === item);
                    if (genreFound) {
                      return <StyledGenreItem key={genreIds.indexOf(item)}>{genreFound.name}</StyledGenreItem>;
                    }
                    return null;
                  })}
                </StyledGenreList>
              );
            }}
          </Consumer>
        </StyledShortInfo>
        <StyledRating color={ratingBorderColor}>{voteAverage.toFixed(2)}</StyledRating>
      </StyledInfo>
      <StyledAnnotation>{truncatedOverview}</StyledAnnotation>
      <StarRating onChangeRate={() => rateMovie} value={rating} />
    </StyledCard>
  );
}

export default MovieCard;
