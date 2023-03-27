import React from 'react';

import StyledPagination from './styled';

interface PaginateListProps {
  onChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

function PaginateList({ onChange, currentPage, totalPages }: PaginateListProps) {
  return (
    <StyledPagination current={currentPage} pageSize={20} total={totalPages} onChange={(page) => onChange(page)} />
  );
}

export default PaginateList;
