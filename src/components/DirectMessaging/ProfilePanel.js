import React from 'react';

import {
  ProfilePanelContainer,
  FlexContainer,
  IconButton,
  ImageProfile,
  ImageIcon,
  Button,
} from '../styles/ProfilePanelStyles';
import { Text } from '../styles/globalStyle';

const ProfilePanel = ({ friend, setProfile }) => {
  const closeProfile = () => {
    setProfile(false);
  };
  return (
    <ProfilePanelContainer width={0.2} bg="white">
      <FlexContainer flexDirection="column" m={8}>
        <FlexContainer justifyContent="flex-end" m={10}>
          <Button opacity="30%" onClick={closeProfile}>
            <Text textAlign="right" fontSize={20} m={0}>
              X
            </Text>
          </Button>
        </FlexContainer>
        <FlexContainer flexDirection="column">
          <ImageProfile alt="profile" src={friend.profilePhoto} />
          <Text fontWeight={700} fontSize={22} textAlign="center" m={0}>
            {friend.firstName} {friend.lastName}
          </Text>
          <Text opacity="40%" fontWeight={400} fontSize={18} textAlign="center">
            {friend.location}
          </Text>
          <Text textAlign="center" fontSize={14} my={0} mx={2}>
            {friend.aboutMe}
          </Text>
          <FlexContainer justifyContent="center" m={16}>
            <IconButton>
              <ImageIcon alt="facebook" src={require('../../assets/socialMedia/facebook.png')} />
            </IconButton>
            <IconButton>
              <ImageIcon alt="facebook" src={require('../../assets/socialMedia/twitter.png')} />
            </IconButton>
            <IconButton>
              <ImageIcon alt="facebook" src={require('../../assets/socialMedia/instagram.png')} />
            </IconButton>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer mr={6} flexDirection="column">
            <Text textAlign="right" fontSize={14} fontWeight={600} opacity="30%">
              Phone:
            </Text>
            <Text textAlign="right" fontSize={14} fontWeight={600} opacity="30%">
              Email:
            </Text>
            <Text textAlign="right" fontSize={14} fontWeight={600} opacity="30%">
              DOB:
            </Text>
          </FlexContainer>
          <FlexContainer flexDirection="column">
            <Text textAlign="left" fontSize={14}>
              {friend.phone}
            </Text>
            <Text textAlign="left" fontSize={14}>
              {friend.email}
            </Text>
            <Text textAlign="left" fontSize={14}>
              {friend.dateOfBirth}
            </Text>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </ProfilePanelContainer>
  );
};

export default ProfilePanel;
