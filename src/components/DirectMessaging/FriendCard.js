import React, { useState } from 'react';

import {
  Wrapper,
  ContentWrapper,
  Button,
  ProfileSummaryWrapper,
  NameTimeWrapper,
  ImageUser,
  NameText,
  GreyText,
  ParagraphText,
} from '../styles/FriendCardStyles';

const FriendCard = ({ selectedFriend, setProfile, profile, setFriend }) => {
  const [buttonColor, setButtonColor] = useState(false);
  const ChatAndProfile = () => {
    setProfile(true);
    setFriend(selectedFriend);

    setButtonColor(!buttonColor);
  };
  return (
    <Wrapper>
      <Button buttonColor={buttonColor} onClick={ChatAndProfile}>
        <ContentWrapper>
          <ProfileSummaryWrapper>
            <ImageUser src={selectedFriend.profilePhoto} alt="profile" />
            <NameTimeWrapper>
              <NameText>
                {selectedFriend.firstName} {selectedFriend.lastName}
                <GreyText>{selectedFriend.status}</GreyText>
              </NameText>
              <GreyText>{selectedFriend.timeStamp}</GreyText>
            </NameTimeWrapper>
          </ProfileSummaryWrapper>
          <ParagraphText>
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </ParagraphText>
        </ContentWrapper>
      </Button>
    </Wrapper>
  );
};

export default FriendCard;
