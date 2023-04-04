import React from 'react';

import StyledRate from './styled';

function StarRating({ onChangeRate, value }) {
  return (
    <StyledRate
      allowHalf
      defaultValue={0}
      value={value}
      count={10}
      style={{ fontSize: 16 }}
      onChange={onChangeRate()}
    />
  );
}

export default StarRating;
