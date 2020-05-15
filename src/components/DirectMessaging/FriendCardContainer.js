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
    <FriendCardFlexContainer borderRadius={4} flexDirection="column" mt={3}>
      {userId === selectedFriend.userId ? (
        <ButtonHighlighted
          borderRadius={4}
          borderLeft="solid"
          borderLeftWidth={4}
          borderRight="none"
          borderTop="none"
          borderBottom="none"
          borderColor="tomato"
          boxShadow="10px 0px 10px -10px tomato inset"
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
