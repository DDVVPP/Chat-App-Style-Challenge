import React, { useState } from 'react';

import { ContentContainer, FlexContainer } from '../styles/FriendCardStyles';
import { Text, MediumAvatar, StyledBadgeOffline, StyledBadgeOnline } from '../styles/globalStyle';

const FriendCard = ({ selectedFriend }) => {
  return (
    <ContentContainer m={14}>
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
            <Text mt={8} ml={0} opacity="50%" fontSize={14} textAlign="left">
              {selectedFriend.status}
            </Text>
          </FlexContainer>
          <Text m={0} opacity="50%" fontWeight={300} fontSize={16}>
            {selectedFriend.timeStamp}
          </Text>
        </FlexContainer>
      </FlexContainer>
      <Text fontSize={14} textAlign="left">
        {selectedFriend.messagesReceived[selectedFriend.messagesReceived.length - 1]}
      </Text>
    </ContentContainer>
  );
};

export default FriendCard;
