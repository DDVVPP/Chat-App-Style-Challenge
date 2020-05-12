import React from 'react';

import friends from '../../data/friends';
import {
  FriendListContainer,
  Searchbar,
  Input,
  FlexRowSpaceBtwnContainer,
  FlexRowEndContainer,
  SortContainer,
  ParagraphText,
  ParagraphTextCenter,
  ParagraphTextGrey,
  Button,
} from '../styles/FriendListPanelStyles';
import FriendCard from './FriendCard';

const FriendListPanel = ({ setProfile, profile, setFriend, setButtonColor, buttonColor }) => {
  return (
    <FriendListContainer>
      <FlexRowSpaceBtwnContainer>
        <Searchbar bg="searchbarGrey1">
          <img alt="search" src={require('../../assets/icons/search.png')} />
          <Input bg="transparent" type="text" placeholder="Enter for search..." />
        </Searchbar>
        <FlexRowEndContainer>
          <ParagraphTextGrey fontSize={14}>147</ParagraphTextGrey>
          <img alt="badge" src={require('../../assets/icons/starBadge.png')} />
        </FlexRowEndContainer>
      </FlexRowSpaceBtwnContainer>
      <FlexRowSpaceBtwnContainer>
        <SortContainer>
          <ParagraphTextGrey fontSize={14}>Sort By:</ParagraphTextGrey>
          <ParagraphText fontSize={14}>Latest First</ParagraphText>
        </SortContainer>
        <FlexRowEndContainer>
          <ParagraphTextGrey fontSize={14}>Add New</ParagraphTextGrey>
          <Button color="white" bg="tomato">
            <ParagraphTextCenter fontSize={32}>+</ParagraphTextCenter>
          </Button>
        </FlexRowEndContainer>
      </FlexRowSpaceBtwnContainer>
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
    </FriendListContainer>
  );
};

export default FriendListPanel;
