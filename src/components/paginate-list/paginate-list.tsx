import React from 'react';

import StyledPagination from './styled';

function PaginateList() {
  return <StyledPagination defaultCurrent={1} total={30} pageSize={6} />;
}

export default PaginateList;
