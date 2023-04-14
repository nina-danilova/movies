import React, { Component } from 'react';
import { Input } from 'antd';
import _ from 'lodash';

import Message from '../message';
import { getMovieList } from '../../utilitary/api';

interface MovieInfoProps {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

interface SearchInputProps {
  onError: () => void;
}

interface SearchInputState {
  foundMovieList: MovieInfoProps[] | null;
}

class SearchInput extends Component<SearchInputProps, SearchInputState> {
  constructor(props) {
    super(props);
    this.state = {
      foundMovieList: null,
    };
  }

  getList = (e) => {
    const { onError } = this.props;
    if (e.target.value) {
      getMovieList(
        `https://api.themoviedb.org/3/search/movie?api_key=f45b7772c51af33c0a94a6cb415a0307&query=${e.target.value}`
      )
        .then((data) => {
          this.setState({
            foundMovieList: data.results,
          });
        })
        .catch(onError);
    }
  };

  render() {
    const { foundMovieList } = this.state;
    const debouncedGetList = _.debounce(this.getList, 2000);
    let noDataMessage;
    if (foundMovieList === null) {
      noDataMessage = null;
    } else if (foundMovieList.length) {
      noDataMessage = null;
    } else {
      noDataMessage = <Message message="No result" description="Edit your request" type="warning" closable />;
    }
    return (
      <>
        {noDataMessage}
        <Input placeholder="Type to search..." onInput={debouncedGetList} />
      </>
    );
  }
}

export default SearchInput;
