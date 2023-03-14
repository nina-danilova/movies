import React from 'react';

import TabList from '../tab-list';
import SearchInput from '../search-input';
import PaginateList from '../paginate-list';
import MovieList from '../movie-list';

import './app.css';

function App() {
  return (
    <>
      <SearchInput />
      <TabList />
      <MovieList />
      <PaginateList />
    </>
  );
}

export default App;
