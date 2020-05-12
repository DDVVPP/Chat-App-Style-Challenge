import React from 'react';

import {
  ProfilePanelContainer,
  Content,
  CenteredContent,
  IconContainer,
  Icon,
  Image,
  ContactContainer,
  ContactDetailsContainer,
  H1Text,
  H3GreyText,
  ParagraphTextGrey,
  ParagraphText,
  Button,
  ButtonContainer,
} from '../styles/ProfilePanelStyles';

const ProfilePanel = ({ friend, setProfile }) => {
  const closeProfile = () => {
    setProfile(false);
  };
  return (
    <ProfilePanelContainer bg="white">
      <Content>
        <ButtonContainer>
          <Button opacity="30%" onClick={closeProfile}>
            <H1Text textAlign="right">X</H1Text>
          </Button>
        </ButtonContainer>
        <CenteredContent>
          <img alt="profile" src={friend.profilePhoto} />
          <H1Text fontWeight="bold" fontSize={22} textAlign="center">
            {friend.firstName} {friend.lastName}
          </H1Text>
          <H3GreyText opacity="50%" fontWeight="light" textAlign="center">
            {friend.location}
          </H3GreyText>
          <ParagraphText textAlign="center" fontSize={14}>
            {friend.aboutMe}
          </ParagraphText>
          <IconContainer>
            <Icon>
              <Image alt="facebook" src={require('../../assets/socialMedia/facebook.png')} />
            </Icon>
            <Icon>
              <Image alt="facebook" src={require('../../assets/socialMedia/twitter.png')} />
            </Icon>
            <Icon>
              <Image alt="facebook" src={require('../../assets/socialMedia/instagram.png')} />
            </Icon>
          </IconContainer>
        </CenteredContent>
        <ContactContainer>
          <ContactDetailsContainer>
            <ParagraphTextGrey textAlign="right" fontSize={14} opacity="50%">
              Phone:
            </ParagraphTextGrey>
            <ParagraphTextGrey textAlign="right" fontSize={14} opacity="50%">
              Email:
            </ParagraphTextGrey>
            <ParagraphTextGrey textAlign="right" fontSize={14} opacity="50%">
              DOB:
            </ParagraphTextGrey>
          </ContactDetailsContainer>
          <ContactDetailsContainer>
            <ParagraphText textAlign="left" fontSize={14}>
              {friend.phone}
            </ParagraphText>
            <ParagraphText textAlign="left" fontSize={14}>
              {friend.email}
            </ParagraphText>
            <ParagraphText textAlign="left" fontSize={14}>
              {friend.dateOfBirth}
            </ParagraphText>
          </ContactDetailsContainer>
        </ContactContainer>
      </Content>
    </ProfilePanelContainer>
  );
};

export default ProfilePanel;
