import React, { useState } from 'react';

import {
  FriendCardContainer,
  ContentContainer,
  Button,
  FlexContainer,
  ImageUser,
} from '../styles/FriendCardStyles';
import { Text } from '../styles/globalStyle';

const FriendCard = ({ selectedFriend, setProfile, setFriend }) => {
  const [buttonColor, setButtonColor] = useState(false);
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setButtonColor(!buttonColor);
  };
  return (
    <FriendCardContainer borderRadius={4} flexDirection="column" mt={12}>
      <Button
        borderRadius={4}
        border="none"
        color="white"
        bg="deepBlue"
        type="button"
        buttonColor={buttonColor}
        onClick={ChatAndProfile}
      >
        <ContentContainer m={14}>
          <FlexContainer justifyContent="space-between" width={1}>
            <ImageUser mr={12} mt={0} src={selectedFriend.profilePhoto} alt="profile" />
            <FlexContainer justifyContent="space-between" width={1}>
              <FlexContainer flexDirection="column" justifyContent="flex-start">
                <Text fontWeight={700} m={0} fontSize={20}>
                  {selectedFriend.firstName} {selectedFriend.lastName}
                </Text>
                <Text mt={8} ml={0} opacity="50%" fontSize={14} textAlign="left">
                  {selectedFriend.status}
                </Text>
              </FlexContainer>
              <Text m={0} opacity="50%" fontWeight={300} fontSize={16}>
                {selectedFriend.timeStamp}
              </Text>
            </FlexContainer>
          </FlexContainer>
          <Text fontSize={14} textAlign="left">
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </Text>
        </ContentContainer>
      </Button>
    </FriendCardContainer>
  );
};

export default FriendCard;
