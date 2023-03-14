import React from 'react';
import { Tabs } from 'antd';

import './tab-list.css';

function TabList() {
  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[
        {
          label: 'Search',
          key: '1',
          children: 'Search results',
        },
        {
          label: 'Rated',
          key: '2',
          children: 'Rated results',
        },
      ]}
    />
  );
}

export default TabList;
