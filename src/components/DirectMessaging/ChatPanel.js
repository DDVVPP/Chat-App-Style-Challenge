import React from 'react';

import {
  Wrapper,
  ContentWrapper,
  ProfileSummaryWrapper,
  NameTimeWrapper,
  ImageUser,
  Image,
  NameText,
  GreyText,
  SearchWrapper,
  Input,
} from '../styles/ChatPanelStyles';

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
