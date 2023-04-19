import React from 'react';
import { Offline, Online } from 'react-detect-offline';

import { TabList } from '../tab-list';
import { Message } from '../message';
import { getGuestSession } from '../../services/api';
import { apiKey } from '../../utilitary/constants';

import { StyledApp } from './styled';

export function App() {
  let guestSessionErrorMessage;

  function getGuestSessionId() {
    getGuestSession(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`)
      .then((data) => {
        if (data.success) {
          localStorage.setItem('guestSessionId', data.guest_session_id);
        }
      })
      .catch(() => {
        guestSessionErrorMessage = (
          <Message message="Guest session did not get" description="Please, refresh" type="error" closable />
        );
      });
  }

  if (!localStorage.getItem('guestSessionId')) {
    getGuestSessionId();
  }

  return (
    <>
      <Offline>
        <Message message="You are offline" description="Check the connection" type="error" closable />
      </Offline>
      <Online>
        {guestSessionErrorMessage}
        <StyledApp>
          <TabList />
        </StyledApp>
      </Online>
    </>
  );
}
