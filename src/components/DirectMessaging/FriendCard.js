import React, { useState } from 'react';

import {
  FriendCardContainer,
  ContentContainer,
  Button,
  FlexRowContainer,
  ImageUser,
  FlexColumnContainer,
  ParagraphTextGrey,
  H3TextGrey,
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
                <h2>
                  {selectedFriend.firstName} {selectedFriend.lastName}
                </h2>
                <ParagraphTextGrey>{selectedFriend.status}</ParagraphTextGrey>
              </FlexColumnContainer>
              <H3TextGrey>{selectedFriend.timeStamp}</H3TextGrey>
            </FlexRowContainer>
          </FlexRowContainer>
          <p>{selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}</p>
        </ContentContainer>
      </Button>
    </FriendCardContainer>
  );
};

export default FriendCard;
