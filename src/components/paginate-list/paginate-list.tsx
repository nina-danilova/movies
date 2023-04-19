import React from 'react';

import { StyledPagination } from './styled';

interface PaginateListProps {
  onChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export function PaginateList({ onChange, currentPage, totalPages }: PaginateListProps) {
  return (
    <StyledPagination
      current={currentPage}
      defaultPageSize={20}
      showSizeChanger={false}
      total={totalPages}
      onChange={(page) => onChange(page)}
    />
  );
}
