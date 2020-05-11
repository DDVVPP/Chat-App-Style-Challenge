import React from 'react';

import friends from '../../data/friends';
import {
  FriendListContainer,
  Searchbar,
  FlexRowSpaceBtwnContainer,
  FlexRowEndContainer,
  SortContainer,
  ParagraphTextGrey,
  Button,
} from '../styles/FriendListPanelStyles';
import FriendCard from './FriendCard';

const FriendListPanel = ({ setProfile, profile, setFriend, setButtonColor, buttonColor }) => {
  return (
    <FriendListContainer>
      <FlexRowSpaceBtwnContainer>
        <Searchbar>
          <img alt="search" src={require('../../assets/icons/search.png')} />
          <input type="text" placeholder="Enter for search..." />
        </Searchbar>
        <FlexRowEndContainer>
          <ParagraphTextGrey>147</ParagraphTextGrey>
          <img alt="badge" src={require('../../assets/icons/starBadge.png')} />
        </FlexRowEndContainer>
      </FlexRowSpaceBtwnContainer>
      <FlexRowSpaceBtwnContainer>
        <SortContainer>
          <ParagraphTextGrey>Sort By:</ParagraphTextGrey>
          <p>Latest First</p>
        </SortContainer>
        <FlexRowEndContainer>
          <ParagraphTextGrey>Add New</ParagraphTextGrey>
          <Button>
            <h2>+</h2>
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
