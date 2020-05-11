import React from 'react';

import friends from '../../data/friends';
import {
  Wrapper,
  SearchWrapper,
  SearchBadgeWrapper,
  StarBadgeWrapper,
  SortWrapper,
  Input,
  GreyText,
  NameText,
  Button,
  Image,
  ImageBadge,
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
        <StarBadgeWrapper>
          <GreyText>147</GreyText>
          <ImageBadge alt="badge" src={require('../../assets/icons/starBadge.png')} />
        </StarBadgeWrapper>
      </SearchBadgeWrapper>
      <SearchBadgeWrapper>
        <SortWrapper>
          <GreyText>Sort By:</GreyText>
          <NameText>Latest First</NameText>
        </SortWrapper>
        <StarBadgeWrapper>
          <GreyText>Add New</GreyText>
          <Button>+</Button>
        </StarBadgeWrapper>
      </SearchBadgeWrapper>
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
