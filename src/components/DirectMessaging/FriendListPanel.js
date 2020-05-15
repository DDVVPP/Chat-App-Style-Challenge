import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

import { starBadge, search } from '../../assets/index';
import friends from '../../data/friends';
import { FlexContainer, Searchbar, Input, Image } from '../styles/FriendListPanelStyles';
import { Text } from '../styles/globalStyle';
import FriendCardContainer from './FriendCardContainer';

const FriendListPanel = ({ setProfile, profile, setFriend, userId, setUserId }) => {
  return (
    <FlexContainer
      // My attempt at breakpoints: width={{ small: 1, medium: 1, large: 0.26 }}
      width="400px"
      flexDirection="column"
      mx={4}
      my={3}
    >
      <FlexContainer justifyContent="space-between" mb={3}>
        <Searchbar width={0.8} borderRadius={50} bg="searchbarGrey1">
          <img alt="search" src={search} />
          <Input
            border="none"
            width={1}
            bg="transparent"
            type="text"
            placeholder="Enter for search..."
          />
        </Searchbar>
        <FlexContainer justifyContent="flex-end" width={0.3}>
          <Text mr={3} opacity="30%" fontSize={14}>
            147
          </Text>
          <Image alt="badge" src={starBadge} />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer justifyContent="space-between" mb={3}>
        <FlexContainer>
          <Text mr={3} opacity="30%" fontSize={14}>
            Sort By:
          </Text>
          <Text textAlign="left" fontSize={14}>
            Latest First
          </Text>
        </FlexContainer>
        <FlexContainer justifyContent="flex-end" width={0.3}>
          <Text mr={3} opacity="30%" fontSize={14}>
            Add New
          </Text>
          <div>
            <Fab size="small" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </FlexContainer>
      </FlexContainer>
      {friends.map((selectedFriend) => {
        const key = selectedFriend.userId.toString();
        return (
          <FriendCardContainer
            key={key}
            selectedFriend={selectedFriend}
            setProfile={setProfile}
            profile={profile}
            setFriend={setFriend}
            userId={userId}
            setUserId={setUserId}
          />
        );
      })}
    </FlexContainer>
  );
};

export default FriendListPanel;
