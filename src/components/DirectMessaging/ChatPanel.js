import React from 'react';

import {
  Wrapper,
  ContentWrapper,
  ProfileSummaryWrapper,
  NameTimeWrapper,
  ImageUser,
  Image,
  ImageMic,
  ImageEmoji,
  NameText,
  GreyText,
  SearchWrapper,
  StarBadgeWrapper,
  Button,
  ButtonPaperclip,
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
          <ButtonPaperclip>
            <Image alt="search" src={require('../../assets/icons/paperclip.png')} />
          </ButtonPaperclip>
          <Input type="text" placeholder="Enter for search..." />
          <StarBadgeWrapper>
            <Button>
              <ImageEmoji alt="search" src={require('../../assets/icons/emoji.png')} />
            </Button>
            <Button>
              <ImageMic alt="search" src={require('../../assets/icons/mic.png')} />
            </Button>
          </StarBadgeWrapper>
        </SearchWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ChatPanel;
