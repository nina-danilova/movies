import React from 'react';

import { rateMovie } from '../../services/api';

import { StyledRate } from './styled';

export function StarRating({ value, id }) {
  return (
    <StyledRate
      allowHalf
      defaultValue={0}
      value={value}
      count={10}
      style={{ fontSize: 16 }}
      onChange={(v) => {
        rateMovie(v, id);
      }}
    />
  );
}
