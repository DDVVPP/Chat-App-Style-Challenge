import React from 'react';
import styled from 'styled-components';
import './App.css';

import ChatPanel from './components/ChatPanel';
import FriendListPanel from './components/FriendListPanel';
import NavigationPanel from './components/NavigationPanel';
import ProfilePanel from './components/ProfilePanel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  background-color: #f1f1f1;
`;

const DirectMessaging = () => {
  return (
    <Wrapper>
      <NavigationPanel />
      <FriendListPanel />
      <ChatPanel />
      <ProfilePanel />
    </Wrapper>
  );
};

export default DirectMessaging;
