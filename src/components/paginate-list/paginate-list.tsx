import React from 'react';

import { StyledPagination } from './styled';

type PaginateListProps = {
  onChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

export const PaginateList: React.FC<PaginateListProps> = ({ onChange, currentPage, totalPages }) => {
  return (
    <StyledPagination
      current={currentPage}
      defaultPageSize={20}
      showSizeChanger={false}
      total={totalPages}
      onChange={(page) => onChange(page)}
    />
  );
};
