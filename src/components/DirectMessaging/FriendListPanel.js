import React from 'react';

import friends from '../../data/friends';
import {
  Wrapper,
  SearchWrapper,
  SearchBadgeWrapper,
  SortWrapper,
  Input,
  GreyText,
  NameText,
  Button,
  Image,
} from '../styles/FriendListPanelStyles';
import FriendCard from './FriendCard';

const FriendListPanel = ({ setProfile, profile, setFriend, setButtonColor, buttonColor }) => {
  return (
    <Wrapper>
      <SearchBadgeWrapper>
        <SearchWrapper>
          <Image alt="search" src={require('../../assets/icons/search.png')} />
          <Input type="text" placeholder="Enter for search..." />
        </SearchWrapper>
        <GreyText>147</GreyText>
        <Image alt="badge" src={require('../../assets/icons/starBadge.png')} />
      </SearchBadgeWrapper>
      <SortWrapper>
        <GreyText>Sort By:</GreyText>
        <NameText>Latest First v</NameText>
        <GreyText>Add New</GreyText>
        <Button>
          <NameText>+</NameText>
        </Button>
      </SortWrapper>
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
    </Wrapper>
  );
};

export default FriendListPanel;
