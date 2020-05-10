import React, { useState } from 'react';
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
  const [profile, setProfile] = useState(false);
  const [friend, setFriend] = useState({});

  return (
    <Wrapper>
      <NavigationPanel />
      <FriendListPanel setProfile={setProfile} profile={profile} setFriend={setFriend} />

      {profile
        ? [
            <ChatPanel friend={friend} />,
            <ProfilePanel friend={friend} setProfile={setProfile} setFriend={setFriend} />,
          ]
        : null}
    </Wrapper>
  );
};

export default DirectMessaging;
