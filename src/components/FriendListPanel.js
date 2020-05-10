import React from 'react';
import styled from 'styled-components';

import friends from '../data/friends';
import FriendCard from './FriendCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292f4c;
  width: 32vw;
  margin: 2%;
`;

const FriendListPanel = () => {
  return (
    <Wrapper>
      {friends.map((friend) => {
        return (
          <div>
            <FriendCard friend={friend} />
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FriendListPanel;
