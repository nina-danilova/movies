import React, { Component } from 'react';
import { Input } from 'antd';
import _ from 'lodash';

import { Message } from '../message';
import { getMovieList } from '../../services/api';
import { apiKey } from '../../utilitary/constants';

interface SearchInputProps {
  onError: () => void;
  onLoadResults: (data) => void;
  onSearch: (queryString) => void;
}

interface SearchInputState {
  notFound: boolean;
}

export class SearchInput extends Component<SearchInputProps, SearchInputState> {
  constructor(props) {
    super(props);
    this.state = {
      notFound: false,
    };
  }

  getList = (e) => {
    const { onError, onLoadResults, onSearch } = this.props;
    const { notFound } = this.state;
    if (e.target.value) {
      onSearch(e.target.value);
      getMovieList(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${e.target.value}`)
        .then((data) => {
          if (data.total_results > 0) {
            if (notFound) {
              this.setState({
                notFound: false,
              });
            }
            onLoadResults(data);
          } else {
            this.setState({
              notFound: true,
            });
          }
        })
        .catch(onError);
    }
  };

  render() {
    const { notFound } = this.state;
    const debouncedGetList = _.debounce(this.getList, 1000);
    const noDataMessage = notFound ? (
      <Message message="No result" description="Edit your request" type="warning" closable />
    ) : null;

    return (
      <>
        {noDataMessage}
        <Input placeholder="Type to search..." onInput={debouncedGetList} />
      </>
    );
  }
}
