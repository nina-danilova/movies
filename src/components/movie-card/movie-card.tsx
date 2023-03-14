import React from 'react';
import { Card } from 'antd';

import './movie-card.css';
import StarRating from '../star-rating';

function MovieCard() {
  return (
    <Card>
      <div className="movie-card__wrapper">
        <div className="movie-card__info">
          <img src="#" className="movie-card__image" height={91} width={60} alt="Movie poster" />
          <div className="movie-card__short-info-block">
            <p className="movie-card__title">The way back</p>
            <p className="movie-card__release-date">March 5, 2020</p>
            <ul className="movie-card__genre-list genre-list">
              <li className="genre-list__item">
                <span className="genre-list__item-name">Action</span>
              </li>
              <li className="genre-list__item">
                <span className="genre-list__item-name">Drama</span>
              </li>
            </ul>
          </div>
          <div className="movie-card__rating">
            <span className="movie-card__rating-value">6.6</span>
          </div>
        </div>
        <p className="movie-card__annotation">
          A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
          attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...
        </p>
        <div className="movie-card__star-rating">
          <StarRating />
        </div>
      </div>
    </Card>
  );
}

export default MovieCard;
