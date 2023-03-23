import React from 'react';
import { Offline, Online } from 'react-detect-offline';

import TabList from '../tab-list';
import Message from '../message';

import StyledApp from './styled';

function App() {
  return (
    <>
      <Online>
        <StyledApp>
          <TabList />
        </StyledApp>
      </Online>
      <Offline>
        <Message message="You are offline" description="Check the connection" type="error" closable={false} />
      </Offline>
    </>
  );
}

export default App;
