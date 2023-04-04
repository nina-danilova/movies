import React, { Component } from 'react';

import Spinner from '../spinner';
import MovieList from '../movie-list';
import Message from '../message';
import PaginateList from '../paginate-list';
import { getMovieList, getGuestSession } from '../../utilitary/api';

interface MovieInfoProps {
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

type RatedResultType = MovieInfoProps | object;

interface RatedResultState {
  ratedLoading: boolean;
  ratedError: boolean;
  ratedCurrentPage: number;
  ratedTotalResults: number;
  ratedMovieList: MovieInfoProps[];
  guestSessionId: string;
  guestSessionExpTime: Date;
}

class RatedResult extends Component<RatedResultType, RatedResultState> {
  constructor(props) {
    super(props);
    this.state = {
      ratedLoading: true,
      ratedError: false,
      ratedCurrentPage: 0,
      ratedTotalResults: 0,
      ratedMovieList: [],
      guestSessionId: 'bc2568d0fc8ee9f297cb4bf6b1bebcf4',
      guestSessionExpTime: new Date('2023-04-04 09:51:39 UTC'),
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
    const { guestSessionId } = this.state;
    this.setState({
      ratedLoading: true,
    });
    getMovieList(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=f45b7772c51af33c0a94a6cb415a0307&language=en-US&sort_by=created_at.asc&page=${page}`
    )
      .then((data) => {
        console.log('onRatedPageChange, i have got ', data);
        this.setState({
          ratedCurrentPage: page,
          ratedMovieList: data.results,
          ratedLoading: false,
        });
      })
      .catch(this.onError);
  };
  /*
  getGuestSessionId = () => {
    getGuestSession(
      'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f45b7772c51af33c0a94a6cb415a0307'
    )
      .then((data) => {
        if (data.success) {
          this.setState({
            guestSessionId: data.guest_session_id,
            guestSessionExpTime: new Date(data.expires_at),
          });
        }
        console.log('ТЕКУЩИЕ ДАННЫЕ СЕССИИ (rated)', data.guestSessionId, data.guestSessionExpTime);
      })
      .catch(this.onError);
  };
  */

  loadRatedMovieList = () => {
    console.log('started');
    const { guestSessionId, guestSessionExpTime } = this.state;
    const now = new Date();
    /*
    if (!guestSessionId || guestSessionExpTime < now) {
      this.getGuestSessionId();
    } */
    console.log(guestSessionId, guestSessionExpTime);
    getMovieList(
      `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=f45b7772c51af33c0a94a6cb415a0307`
    )
      .then((data) => {
        console.log(data);
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

export default RatedResult;
