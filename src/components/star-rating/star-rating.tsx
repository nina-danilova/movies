import React from 'react';
import { Rate } from 'antd';

import './star-rating.css';

function StarRating() {
  return <Rate allowHalf defaultValue={2.5} count={10} />;
}

export default StarRating;
