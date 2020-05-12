import React, { useState } from 'react';

import {
  FriendCardContainer,
  ContentContainer,
  Button,
  FlexRowContainer,
  ImageUser,
  FlexColumnContainer,
  ParagraphTextGrey,
  ParagraphText,
  H3TextGrey,
  H2Text,
} from '../styles/FriendCardStyles';

const FriendCard = ({ selectedFriend, setProfile, profile, setFriend }) => {
  const [buttonColor, setButtonColor] = useState(false);
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setButtonColor(!buttonColor);
  };
  return (
    <FriendCardContainer>
      <Button
        color="white"
        bg="deepBlue"
        type="button"
        buttonColor={buttonColor}
        onClick={ChatAndProfile}
      >
        <ContentContainer>
          <FlexRowContainer>
            <ImageUser src={selectedFriend.profilePhoto} alt="profile" />
            <FlexRowContainer>
              <FlexColumnContainer>
                <H2Text fontWeight="bold" fontSize={20}>
                  {selectedFriend.firstName} {selectedFriend.lastName}
                </H2Text>
                <ParagraphTextGrey fontSize={14} textAlign="left">
                  {selectedFriend.status}
                </ParagraphTextGrey>
              </FlexColumnContainer>
              <H3TextGrey opacity="50%" fontWeight="light" fontSize={18}>
                {selectedFriend.timeStamp}
              </H3TextGrey>
            </FlexRowContainer>
          </FlexRowContainer>
          <ParagraphText fontSize={14} textAlign="left">
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </ParagraphText>
        </ContentContainer>
      </Button>
    </FriendCardContainer>
  );
};

export default FriendCard;
