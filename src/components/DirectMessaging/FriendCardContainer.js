import React from 'react';

import {
  FriendCardFlexContainer,
  Button,
  ButtonHighlighted,
} from '../styles/FriendCardContainerStyles';
import FriendCard from './FriendCard';

const FriendCardContainer = ({ selectedFriend, setProfile, setFriend, userId, setUserId }) => {
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setUserId(selectedFriend.userId);
  };

  return (
    <FriendCardFlexContainer borderRadius={4} flexDirection="column" mt={12}>
      {userId === selectedFriend.userId ? (
        <ButtonHighlighted
          borderRadius={4}
          borderLeft="4px solid"
          borderRight="none"
          borderTop="none"
          borderBottom="none"
          borderColor="tomato"
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
