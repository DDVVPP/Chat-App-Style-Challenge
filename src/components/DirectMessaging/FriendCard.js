/* eslint-disable no-nested-ternary */
import React from 'react';

import { ContentContainer, FlexContainer, Image } from '../styles/FriendCardStyles';
import {
  Text,
  MediumAvatar,
  SmallAvatar,
  StyledBadgeOffline,
  StyledBadgeOnline,
} from '../styles/globalStyle';

const FriendCard = ({ selectedFriend }) => {
  return (
    <ContentContainer m={3}>
      <FlexContainer justifyContent="space-between" width={1}>
        {selectedFriend.status === 'Online' ? (
          <StyledBadgeOnline
            overlap="circle"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            variant="dot"
          >
            <MediumAvatar alt="current user" src={selectedFriend.profilePhoto} />
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
            <MediumAvatar alt="current user" src={selectedFriend.profilePhoto} />
          </StyledBadgeOffline>
        )}
        <FlexContainer justifyContent="space-between" width={1}>
          <FlexContainer flexDirection="column" justifyContent="flex-start">
            <Text fontWeight={700} m={0} fontSize={20}>
              {selectedFriend.firstName} {selectedFriend.lastName}
            </Text>
            <Text mt={2} ml={0} opacity="50%" fontSize={14} textAlign="left">
              {selectedFriend.status}
            </Text>
          </FlexContainer>
          <Text m={0} opacity="50%" fontWeight={300} fontSize={16}>
            {selectedFriend.timeStamp}
          </Text>
        </FlexContainer>
      </FlexContainer>
      {selectedFriend.reply ? (
        <FlexContainer justifyContent="flex-start">
          <Image m={2} alt="reply" src={require('../../assets/icons/reply.png')} />
          <Text fontSize={14} textAlign="left" flexWrap="nowrap">
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </Text>
        </FlexContainer>
      ) : selectedFriend.newMessages ? (
        <FlexContainer justifyContent="space-between">
          <Text fontSize={14} textAlign="left" flexWrap="nowrap">
            {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
          </Text>
          <SmallAvatar>2</SmallAvatar>
        </FlexContainer>
      ) : (
        <Text fontSize={14} textAlign="left" flexWrap="nowrap">
          {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
        </Text>
      )}
    </ContentContainer>
  );
};

export default FriendCard;
