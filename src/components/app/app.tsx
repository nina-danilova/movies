import React, { Component } from 'react';

import TabList from '../tab-list';
import getMovieList from '../../utilitary/api';

import StyledApp from './styled';

interface AppState {
  movieList: object[];
}

class App extends Component<object, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          title: 'Hi',
        },
      ],
    };
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
