import React from 'react';
import { Offline, Online } from 'react-detect-offline';

import { TabList } from '../tab-list';
import { Message } from '../message';
import { getGuestSessionId } from '../../services/api';

import { StyledApp } from './styled';

export const App: React.FC = () => {
  if (!localStorage.getItem('guestSessionId')) {
    getGuestSessionId();
  }

  return (
    <>
      <Offline>
        <Message message="You are offline" description="Check the connection" type="error" closable />
      </Offline>
      <Online>
        <StyledApp>
          <TabList />
        </StyledApp>
      </Online>
    </>
  );
};
