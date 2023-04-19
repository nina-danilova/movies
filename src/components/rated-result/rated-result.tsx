import React, { Component } from 'react';

import { Spinner } from '../spinner';
import { MovieList } from '../movie-list';
import { Message } from '../message';
import { PaginateList } from '../paginate-list';
import { getMovieList } from '../../services/api';
import { apiKey } from '../../utilitary/constants';

interface MovieInfoProps {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
  rating: number;
  genre_ids: number[];
}

type RatedResultProps = MovieInfoProps | object;

interface RatedResultState {
  ratedLoading: boolean;
  ratedError: boolean;
  ratedCurrentPage: number;
  ratedTotalResults: number;
  ratedMovieList: MovieInfoProps[];
}

export class RatedResult extends Component<RatedResultProps, RatedResultState> {
  guestSessionId = localStorage.getItem('guestSessionId');

  constructor(props) {
    super(props);
    this.state = {
      ratedLoading: true,
      ratedError: false,
      ratedCurrentPage: 0,
      ratedTotalResults: 0,
      ratedMovieList: [],
    };
  }

  componentDidMount() {
    this.loadRatedMovieList();
  }

  onError = () => {
    this.setState({
      ratedError: true,
      ratedLoading: false,
    });
  };

  onRatedPageChange = (page: number) => {
    this.setState({
      ratedLoading: true,
    });
    getMovieList(
      `https://api.themoviedb.org/3/guest_session/${this.guestSessionId}/rated/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.asc&page=${page}`
    )
      .then((data) => {
        this.setState({
          ratedCurrentPage: page,
          ratedMovieList: data.results,
          ratedLoading: false,
        });
      })
      .catch(this.onError);
  };

  loadRatedMovieList = () => {
    getMovieList(`https://api.themoviedb.org/3/guest_session/${this.guestSessionId}/rated/movies?api_key=${apiKey}`)
      .then((data) => {
        this.setState({
          ratedMovieList: data.results,
          ratedCurrentPage: data.page,
          ratedTotalResults: data.total_results,
          ratedLoading: false,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { ratedLoading, ratedError, ratedMovieList, ratedCurrentPage, ratedTotalResults } = this.state;
    const hasRatedContent = !(ratedLoading || ratedError);
    const ratedSpinner = ratedLoading ? <Spinner /> : null;
    const ratedMoviesContent = hasRatedContent ? <MovieList movieList={ratedMovieList} /> : null;
    const errorMessage = ratedError ? (
      <Message
        message="Something is wrong with rated result"
        description="Already fixing"
        type="error"
        closable={false}
      />
    ) : null;
    return (
      <>
        {errorMessage}
        {ratedSpinner}
        {ratedMoviesContent}
        <PaginateList onChange={this.onRatedPageChange} currentPage={ratedCurrentPage} totalPages={ratedTotalResults} />
      </>
    );
  }
}
