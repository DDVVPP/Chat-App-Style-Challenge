import React from 'react';
import styled from 'styled-components';

import friends from '../data/friends';
import FriendCard from './FriendCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  margin: 2%;
`;

const FriendListPanel = ({ setProfile, profile, setFriend }) => {
  return (
    <Wrapper>
      {friends.map((selectedFriend) => {
        return (
          <FriendCard
            key={selectedFriend.userdId}
            selectedFriend={selectedFriend}
            setProfile={setProfile}
            profile={profile}
            setFriend={setFriend}
          />
        );
      })}
    </Wrapper>
  );
};

export default FriendListPanel;
