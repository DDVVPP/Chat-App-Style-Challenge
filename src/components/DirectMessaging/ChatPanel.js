import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: white;
  width: 38vw;
  height: 100vh;
  margin-bottom: 3%;
  border-style: solid;
  border-width: 2px;
  border-color: #eeeeee;
`;
const ContentWrapper = styled.div`
  margin: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  align-self: center;
  margin-right: 2%;
  max-width: 8%;
  height: auto;
`;
const Image = styled.img`
  align-self: center;
  // position: relative;
  max-width: 70%;
  height: auto;
`;
const NameText = styled.h1`
  font-size: 18px;
  text-align: left;
`;
const GreyText = styled.p`
  opacity: 50%;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 2rem;
  width: 70%;
  background-color: #eeeeee;
`;
const ChatPanel = ({ friend }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ProfileSummaryWrapper>
          <ImageUser src={friend.profilePhoto} alt="profile" />
          <NameTimeWrapper>
            <NameText>
              {friend.firstName} {friend.lastName}
              <GreyText>{friend.status} placeholder</GreyText>
            </NameText>
            <GreyText>{friend.timeStamp}</GreyText>
          </NameTimeWrapper>
        </ProfileSummaryWrapper>
        <SearchWrapper>
          <Input type="text" placeholder="Enter for search..." />
          <Image alt="search" src={require('../../assets/icons/search.png')} />
        </SearchWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ChatPanel;
