import React from 'react';

import StyledRate from './styled';

function StarRating() {
  return <StyledRate allowHalf defaultValue={2.5} count={10} disabled style={{ fontSize: 16 }} />;
}

export default StarRating;
