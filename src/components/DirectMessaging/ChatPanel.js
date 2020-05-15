import React from 'react';

import { mic, emoji, paperclip } from '../../assets/index';
import {
  ContentContainer,
  FlexContainer,
  Image,
  ImageEmojiMic,
  Button,
  Input,
} from '../styles/ChatPanelStyles';
import { Text, MediumAvatar, StyledBadgeOffline, StyledBadgeOnline } from '../styles/globalStyle';

const ChatPanel = ({ friend }) => {
  return (
    <FlexContainer
      flexDirection="column"
      width={0.5}
      borderRight="solid"
      borderRightWidth={0.5}
      borderColor="lightGrey"
      bg="white"
    >
      <ContentContainer flexDirection="column" justifyContent="space-between" mb={3} mx={4} mt={4}>
        <FlexContainer width={1}>
          {friend.status === 'Online' ? (
            <StyledBadgeOnline
              overlap="circle"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              variant="dot"
            >
              <MediumAvatar alt="current user" src={friend.profilePhoto} />
            </StyledBadgeOnline>
          ) : (
            <StyledBadgeOffline
              overlap="circle"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              variant="dot"
            >
              <MediumAvatar alt="current user" src={friend.profilePhoto} />
            </StyledBadgeOffline>
          )}
          <FlexContainer justifyContent="space-between" width={1}>
            <FlexContainer flexDirection="column" justifyContent="flex-start">
              <Text fontWeight={700} m={0} fontSize={18}>
                {friend.firstName} {friend.lastName}
              </Text>
              <Text mt={2} ml={0} opacity="50%" fontSize={14} textAlign="left">
                {friend.status} {friend.timeStamp}
              </Text>
            </FlexContainer>
            <Text mt={0} opacity="50%" fontWeight={300} fontSize={16}>
              Placeholder
            </Text>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer p={2} bg="searchbarGrey2" border="none" borderRadius={50}>
          <Button>
            <Image alt="search" src={paperclip} />
          </Button>
          <Input width={1} bg="transparent" type="text" placeholder="Enter for search..." />
          <FlexContainer justifyContent="flex-end" width={0.3}>
            <Button>
              <ImageEmojiMic alt="search" src={emoji} />
            </Button>
            <Button>
              <ImageEmojiMic alt="search" src={mic} />
            </Button>
          </FlexContainer>
        </FlexContainer>
      </ContentContainer>
    </FlexContainer>
  );
};

export default ChatPanel;
