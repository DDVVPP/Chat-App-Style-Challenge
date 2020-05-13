import React from 'react';

import friends from '../../data/friends';
import { FlexContainer, Searchbar, Input, Image, Button } from '../styles/FriendListPanelStyles';
import { Text } from '../styles/globalStyle';
import FriendCard from './FriendCard';

const FriendListPanel = ({ setProfile, profile, setFriend, setButtonColor, buttonColor }) => {
  return (
    <FlexContainer width={0.27} flexDirection="column" mx={28} my={12}>
      <FlexContainer justifyContent="space-between" mb={10}>
        <Searchbar width={0.8} borderRadius={50} bg="searchbarGrey1">
          <img alt="search" src={require('../../assets/icons/search.png')} />
          <Input
            border="none"
            width={1}
            bg="transparent"
            type="text"
            placeholder="Enter for search..."
          />
        </Searchbar>
        <FlexContainer justifyContent="flex-end" width={0.3}>
          <Text mr={4} opacity="30%" fontSize={14}>
            147
          </Text>
          <Image ml={6} alt="badge" src={require('../../assets/icons/starBadge.png')} />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justifyContent="space-between" mb={0}>
        <FlexContainer>
          <Text mr={6} opacity="30%" fontSize={14}>
            Flex By:
          </Text>
          <Text textAlign="left" fontSize={14}>
            Latest First
          </Text>
        </FlexContainer>
        <FlexContainer justifyContent="flex-end" width={0.3}>
          <Text mr={6} opacity="30%" fontSize={14}>
            Add New
          </Text>
          <div>
            <Button borderRadius={50} mt={4} color="white" bg="tomato">
              <Text mt={0} textAlign="center" fontSize={28}>
                +
              </Text>
            </Button>
          </div>
        </FlexContainer>
      </FlexContainer>
      {friends.map((selectedFriend) => {
        return (
          <FriendCard
            key={selectedFriend.userdId}
            selectedFriend={selectedFriend}
            setProfile={setProfile}
            profile={profile}
            setFriend={setFriend}
            setButtonColor={setButtonColor}
            buttonColor={buttonColor}
          />
        );
      })}
    </FlexContainer>
  );
};

export default FriendListPanel;
