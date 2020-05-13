import React from 'react';

import {
  ContentContainer,
  FlexContainer,
  ImageUser,
  Image,
  ImageEmojiMic,
  Button,
  Input,
} from '../styles/ChatPanelStyles';
import { Text } from '../styles/globalStyle';

const ChatPanel = ({ friend }) => {
  return (
    <FlexContainer
      flexDirection="column"
      width={0.5}
      borderRightStyle="solid"
      borderColor="lightGrey"
      borderWidth={0.5}
      bg="white"
    >
      <ContentContainer flexDirection="column" justifyContent="space-between" m={16}>
        <FlexContainer width={1}>
          <ImageUser mr={14} mt={0} src={friend.profilePhoto} alt="profile" />
          <FlexContainer justifyContent="space-between" width={1}>
            <FlexContainer flexDirection="column" justifyContent="flex-start">
              <Text fontWeight={700} m={0} fontSize={18}>
                {friend.firstName} {friend.lastName}
              </Text>
              <Text mt={8} ml={0} opacity="50%" fontSize={14} textAlign="left">
                {friend.status} {friend.timeStamp}
              </Text>
            </FlexContainer>
            <Text mt={0} opacity="50%" fontWeight={300} fontSize={16}>
              Placeholder
            </Text>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer p={8} bg="searchbarGrey2" border="none" borderRadius={50}>
          <Button>
            <Image alt="search" src={require('../../assets/icons/paperclip.png')} />
          </Button>
          <Input width={1} bg="transparent" type="text" placeholder="Enter for search..." />
          <FlexContainer justifyContent="flex-end" width={0.3}>
            <Button>
              <ImageEmojiMic alt="search" src={require('../../assets/icons/emoji.png')} />
            </Button>
            <Button>
              <ImageEmojiMic alt="search" src={require('../../assets/icons/mic.png')} />
            </Button>
          </FlexContainer>
        </FlexContainer>
      </ContentContainer>
    </FlexContainer>
  );
};

export default ChatPanel;
