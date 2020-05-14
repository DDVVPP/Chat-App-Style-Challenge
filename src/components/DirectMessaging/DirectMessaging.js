import React, { useState } from 'react';
import styled from 'styled-components';
import { color, typography, width, space } from 'styled-system';

import ChatPanel from './ChatPanel';
import FriendListPanel from './FriendListPanel';
import ProfilePanel from './ProfilePanel';

const FlexContainer = styled.div`
  ${color}
  ${typography}
  ${width}
  ${space}
display: flex;
`;

const DirectMessaging = () => {
  const [profile, setProfile] = useState(false);
  const [friend, setFriend] = useState({});

  return (
    <FlexContainer fontFamily="Lato" bg="backgroundGrey" m={0} width={1}>
      <FriendListPanel setProfile={setProfile} profile={profile} setFriend={setFriend} />
      {profile
        ? [
            <ChatPanel friend={friend} />,
            <ProfilePanel friend={friend} setProfile={setProfile} setFriend={setFriend} />,
          ]
        : null}
    </FlexContainer>
  );
};

export default DirectMessaging;
