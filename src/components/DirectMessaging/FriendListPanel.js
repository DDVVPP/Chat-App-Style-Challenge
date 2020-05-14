import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';

import friends from '../../data/friends';
import { FlexContainer, Searchbar, Input, Image } from '../styles/FriendListPanelStyles';
import { Text } from '../styles/globalStyle';
import FriendCardContainer from './FriendCardContainer';

const FriendListPanel = ({ setProfile, profile, setFriend }) => {
  const [buttonHighlight, setButtonHighlight] = useState(0);

  return (
    <FlexContainer width={0.26} flexDirection="column" mx={28} my={12}>
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
            <Fab size="small" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </FlexContainer>
      </FlexContainer>
      {friends.map((selectedFriend) => {
        return (
          <FriendCardContainer
            key={selectedFriend.userdId}
            selectedFriend={selectedFriend}
            setProfile={setProfile}
            profile={profile}
            setFriend={setFriend}
            buttonHighlight={buttonHighlight}
            setButtonHighlight={setButtonHighlight}
          />
        );
      })}
    </FlexContainer>
  );
};

export default FriendListPanel;
