import React, { useState } from 'react';
import styled from 'styled-components';

import ChatPanel from './ChatPanel';
import FriendListPanel from './FriendListPanel';
import NavigationPanel from './NavigationPanel';
import ProfilePanel from './ProfilePanel';

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
