import React, { useState } from 'react';

import {
  FriendCardFlexContainer,
  ContentContainer,
  Button,
  ButtonHighlighted,
  FlexContainer,
} from '../styles/FriendCardContainerStyles';
import { Text, MediumAvatar, StyledBadgeOffline, StyledBadgeOnline } from '../styles/globalStyle';
import FriendCard from './FriendCard';

const FriendCardContainer = ({
  selectedFriend,
  setProfile,
  setFriend,
  color,
  setColor,
  buttonHighlight,
  setButtonHighlight,
}) => {
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setButtonHighlight(selectedFriend.userId);
  };

  return (
    <FriendCardFlexContainer borderRadius={4} flexDirection="column" mt={12}>
      {buttonHighlight === selectedFriend.userId ? (
        <ButtonHighlighted
          borderRadius={4}
          border="none"
          color="white"
          bg="deepBlue"
          type="button"
          onClick={ChatAndProfile}
        >
          <FriendCard selectedFriend={selectedFriend} />
        </ButtonHighlighted>
      ) : (
        <Button
          borderRadius={4}
          border="none"
          color="deepBlue"
          bg="white"
          type="button"
          onClick={ChatAndProfile}
        >
          <FriendCard selectedFriend={selectedFriend} />
        </Button>
      )}
    </FriendCardFlexContainer>
  );
};

export default FriendCardContainer;
