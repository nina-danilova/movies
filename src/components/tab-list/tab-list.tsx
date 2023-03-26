import React, { Component } from 'react';

import MovieList from '../movie-list';
import SearchInput from '../search-input';
import PaginateList from '../paginate-list';
import getMovieList from '../../utilitary/api';
import Spinner from '../spinner';
import Message from '../message';

import { StyledTabResult, StyledTabs } from './styled';

interface MovieInfoProps {
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

type IType = MovieInfoProps | object;

interface IState {
  movieList: MovieInfoProps[];
  loading: boolean;
  error: boolean;
}

class TabList extends Component<IType, IState> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.updateMovieList();
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateMovieList = () => {
    getMovieList('https://api.themoviedb.org/3/search/movie?api_key=f45b7772c51af33c0a94a6cb415a0307&query=return')
      .then((data) => {
        this.setState({
          movieList: data.results,
          loading: false,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { movieList, loading, error } = this.state;

    const errorMessage = error ? (
      <Message message="Something is wrong" description="Already fixing" type="error" closable={false} />
    ) : null;
    const hasContent = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const moviesContent = hasContent ? <MovieList movieList={movieList} /> : null;
    return (
      <StyledTabs
        defaultActiveKey="1"
        centered
        tabBarStyle={{
          marginBottom: 18,
        }}
        items={[
          {
            label: 'Search',
            key: '1',
            children: (
              <StyledTabResult>
                <SearchInput onError={this.onError} />
                {errorMessage}
                {spinner}
                {moviesContent}
                <PaginateList />
              </StyledTabResult>
            ),
          },
          {
            label: 'Rated',
            key: '2',
            children: (
              <StyledTabResult>
                {errorMessage}
                {spinner}
                {moviesContent}
                <PaginateList />
              </StyledTabResult>
            ),
          },
        ]}
      />
    );
  }
}

export default TabList;
