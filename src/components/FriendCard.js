import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  margin-top: 3%;
`;
const ContentWrapper = styled.div`
  margin: 3%;
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
const NameText = styled.p`
  font-size: 18px;
`;
const GreyText = styled.p`
  opacity: 50%;
`;
const ParagraphText = styled.p`
  fon-size: 12px;
`;

const FriendCard = ({ friend }) => {
  console.log(friend);
  return (
    <Wrapper>
      <ContentWrapper>
        <ProfileSummaryWrapper>
          <ImageUser src={friend.profilePhoto} alt="profile" />
          <NameTimeWrapper>
            <NameText>
              {friend.firstName} {friend.lastName}
              <GreyText>{friend.status}</GreyText>
            </NameText>
            <GreyText>{friend.timeStamp}</GreyText>
          </NameTimeWrapper>
        </ProfileSummaryWrapper>
        <ParagraphText>{friend.messagesReceived[friend.messagesReceived.length - 1]}</ParagraphText>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FriendCard;
