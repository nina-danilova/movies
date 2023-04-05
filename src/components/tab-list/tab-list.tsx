import React, { Component } from 'react';

import MovieList from '../movie-list';
import SearchInput from '../search-input';
import PaginateList from '../paginate-list';
import RatedResult from '../rated-result';
import { getMovieList, getData } from '../../utilitary/api';
import { Provider } from '../context';
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
  rating: number;
  genre_ids: number[];
}

interface GenreListProps {
  id: number;
  name: string;
}

type IType = MovieInfoProps | object;

interface IState {
  movieList: MovieInfoProps[];
  loading: boolean;
  error: boolean;
  currentPage: number;
  totalResults: number;
  genreList: GenreListProps[];
}

class TabList extends Component<IType, IState> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loading: true,
      error: false,
      currentPage: 0,
      totalResults: 0,
      genreList: [],
    };
  }

  componentDidMount() {
    this.loadMovieList();
    this.loadGenreList();
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onPageChange = (page: number) => {
    this.setState({
      loading: true,
    });
    getMovieList(
      `https://api.themoviedb.org/3/search/movie?api_key=f45b7772c51af33c0a94a6cb415a0307&query=return&page=${page}`
    )
      .then((data) => {
        this.setState({
          currentPage: page,
          movieList: data.results,
          loading: false,
        });
      })
      .catch(this.onError);
  };

  loadMovieList = () => {
    getMovieList('https://api.themoviedb.org/3/search/movie?api_key=f45b7772c51af33c0a94a6cb415a0307&query=return')
      .then((data) => {
        this.setState({
          movieList: data.results,
          currentPage: data.page,
          totalResults: data.total_results,
          loading: false,
        });
      })
      .catch(this.onError);
  };

  loadGenreList = () => {
    getData('https://api.themoviedb.org/3/genre/movie/list?api_key=f45b7772c51af33c0a94a6cb415a0307')
      .then((data) => {
        this.setState({
          genreList: data.genres,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { movieList, loading, error, currentPage, totalResults, genreList } = this.state;

    const errorMessage = error ? (
      <Message message="Something is wrong" description="Already fixing" type="error" closable={false} />
    ) : null;
    const hasContent = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const moviesContent = hasContent ? <MovieList movieList={movieList} /> : null;
    return (
      <Provider value={genreList}>
        <StyledTabs
          defaultActiveKey="1"
          centered
          destroyInactiveTabPane
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
                  <PaginateList onChange={this.onPageChange} currentPage={currentPage} totalPages={totalResults} />
                </StyledTabResult>
              ),
            },
            {
              label: 'Rated',
              key: '2',
              children: (
                <StyledTabResult>
                  <RatedResult />
                </StyledTabResult>
              ),
            },
          ]}
        />
      </Provider>
    );
  }
}

export default TabList;
