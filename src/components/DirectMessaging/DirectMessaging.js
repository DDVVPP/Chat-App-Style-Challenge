import React, { useState } from 'react';
import styled from 'styled-components';

import Wrapper from '../styles/DirectMessagingStyles';
import ChatPanel from './ChatPanel';
import FriendListPanel from './FriendListPanel';
import NavigationPanel from './NavigationPanel';
import ProfilePanel from './ProfilePanel';

const DirectMessaging = () => {
  const [profile, setProfile] = useState(false);
  const [friend, setFriend] = useState({});

  return (
    <Wrapper>
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
