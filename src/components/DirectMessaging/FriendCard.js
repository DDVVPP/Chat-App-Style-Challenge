import React, { useState } from 'react';

import {
  FriendCardContainer,
  ContentContainer,
  Button,
  FlexRowContainer,
  ImageUser,
  FlexColumnContainer,
  Text,
} from '../styles/FriendCardStyles';

const FriendCard = ({ selectedFriend, setProfile, profile, setFriend }) => {
  const [buttonColor, setButtonColor] = useState(false);
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setButtonColor(!buttonColor);
  };
  return (
    <FriendCardContainer mt={12}>
      <Button
        color="white"
        bg="deepBlue"
        type="button"
        buttonColor={buttonColor}
        onClick={ChatAndProfile}
      >
        <ContentContainer m={14}>
          <FlexRowContainer width={1}>
            <ImageUser mr={12} mt={0} src={selectedFriend.profilePhoto} alt="profile" />
            <FlexRowContainer width={1}>
              <FlexColumnContainer>
                <Text m={0} fontWeight={700} fontSize={20}>
                  {selectedFriend.firstName} {selectedFriend.lastName}
                </Text>
                <Text mt={10} ml={0} opacity="50%" fontSize={14} textAlign="left">
                  {selectedFriend.status}
                </Text>
              </FlexColumnContainer>
              <Text m={0} opacity="50%" fontWeight={300} fontSize={18}>
                {selectedFriend.timeStamp}
              </Text>
            </FlexRowContainer>
          </FlexRowContainer>
          <Text fontSize={14} textAlign="left">
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </Text>
        </ContentContainer>
      </Button>
    </FriendCardContainer>
  );
};

export default FriendCard;
