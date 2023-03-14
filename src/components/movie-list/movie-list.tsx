import React from 'react';
import { Row, Col } from 'antd';

import MovieCard from '../movie-card';

import './movie-list.css';

function MovieList() {
  return (
    <Row
      gutter={[
        { xs: 20, sm: 36 },
        { xs: 20, sm: 36 },
      ]}
    >
      <Col xs={24} sm={12}>
        <MovieCard />
      </Col>
    </Row>
  );
}

export default MovieList;
