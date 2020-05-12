import React, { useState } from 'react';

import { Container } from '../styles/globalStyle';
import ChatPanel from './ChatPanel';
import FriendListPanel from './FriendListPanel';
import ProfilePanel from './ProfilePanel';

const DirectMessaging = () => {
  const [profile, setProfile] = useState(false);
  const [friend, setFriend] = useState({});

  return (
    <Container fontFamily="Lato" bg="backgroundGrey" width={1}>
      <FriendListPanel setProfile={setProfile} profile={profile} setFriend={setFriend} />
      {profile
        ? [
            <ChatPanel friend={friend} />,
            <ProfilePanel friend={friend} setProfile={setProfile} setFriend={setFriend} />,
          ]
        : null}
    </Container>
  );
};

export default DirectMessaging;
