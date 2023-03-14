import React from 'react';
import { Pagination } from 'antd';

import './paginate-list.css';

function PaginateList() {
  return <Pagination defaultCurrent={1} total={50} />;
}

export default PaginateList;
