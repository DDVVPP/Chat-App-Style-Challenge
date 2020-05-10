import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  margin-top: 3%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
const ContentWrapper = styled.div`
  margin: 3%;
`;
const Button = styled.button`
  border: none;
  // background: ${({ buttonColor }) => (buttonColor ? '#292f4c' : 'none')};
  // color: ${({ buttonColor }) => (buttonColor ? 'white' : 'none')};
    background: 'none';
  cursor: pointer;
  border-radius: 1rem;
  transition-duration: 0.4s;
  &:hover {
    background-color: #292f4c;
    color: white;
  }
`;
const ProfileSummaryWrapper = styled.div`
  display: flex;
  flext-direction: row;
`;
const NameTimeWrapper = styled.div`
  display: flex;
  flext-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const ImageUser = styled.img`
  width: 10%;
  height: 10%;
  margin-right: 2%;
`;
const NameText = styled.h1`
  font-size: 18px;
  text-align: left;
`;
const GreyText = styled.p`
  opacity: 50%;
`;
const ParagraphText = styled.p`
  fon-size: 12px;
  text-align: left;
`;

const FriendCard = ({ selectedFriend, setProfile, profile, setFriend }) => {
  const [buttonColor, setButtonColor] = useState(false);
  const ChatAndProfile = () => {
    console.log('BUTTON COLOR', buttonColor);
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
