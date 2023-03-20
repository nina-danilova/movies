import React from 'react';

import MovieList from '../movie-list';
import SearchInput from '../search-input';
import PaginateList from '../paginate-list';

import { StyledTabResult, StyledTabs } from './styled';

interface MovieInfoProps {
  backdrop_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  id: number;
}

interface TabListProps {
  movies: MovieInfoProps[];
}

function TabList(props: TabListProps) {
  const { movies } = props;
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
              <SearchInput />
              <MovieList movieList={movies} />
              <PaginateList />
            </StyledTabResult>
          ),
        },
        {
          label: 'Rated',
          key: '2',
          children: (
            <StyledTabResult>
              <MovieList movieList={movies} />
              <PaginateList />
            </StyledTabResult>
          ),
        },
      ]}
    />
  );
}

export default TabList;
