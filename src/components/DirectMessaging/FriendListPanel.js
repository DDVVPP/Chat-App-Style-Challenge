import React from 'react';
import styled from 'styled-components';

import friends from '../../data/friends';
import FriendCard from './FriendCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  margin: 2%;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  width: 70%;
  background-color: #eeeeee;
`;
const SearchBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  border: none;
  width: 70%;
  background-color: transparent;
  padding: 1rem;
`;
const GreyText = styled.h2`
  opacity: 50%;
`;
const NameText = styled.h2`
  text-align: left;
`;
const Button = styled.button`
  border: none;
  background: #f34848;
  cursor: pointer;
  color: white;
  border-radius: 50px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #292f4c;
    color: white;
  }
`;
const Image = styled.img`
  align-self: center;
  padding: 1rem;
  margin-left: 2rem;
  max-width: 5%;
  height: auto;
`;
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
