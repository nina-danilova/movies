import React, { Component } from 'react';

import TabList from '../tab-list';
import getMovieList from '../../utilitary/api';

import StyledApp from './styled';

interface MovieInfoProps {
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

type AppType = MovieInfoProps | object;

interface AppState {
  movieList: MovieInfoProps[];
}

class App extends Component<AppType, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    getMovieList(
      'https://api.themoviedb.org/3/search/movie?api_key=f45b7772c51af33c0a94a6cb415a0307&query=return'
    ).then((list) => {
      this.setState({ movieList: list.results });
    });
  }

  render() {
    const { movieList } = this.state;
    return (
      <StyledApp>
        <TabList movies={movieList} />
      </StyledApp>
    );
  }
}

export default App;
