import React from 'react';

import {
  ProfilePanelContainer,
  Content,
  CenteredContent,
  IconContainer,
  Image,
  ContactContainer,
  ContactDetailsContainer,
  H3GreyText,
  ParagraphTextGrey,
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
          <Button onClick={closeProfile}>
            <h2>X</h2>
          </Button>
        </ButtonContainer>
        <CenteredContent>
          <img alt="profile" src={friend.profilePhoto} />
          <h1>
            {friend.firstName} {friend.lastName}
          </h1>
          <H3GreyText>{friend.location}</H3GreyText>
          <p>{friend.aboutMe}</p>
          <IconContainer>
            <button type="button">
              <Image alt="facebook" src={require('../../assets/socialMedia/facebook.png')} />
            </button>
            <button type="button">
              <Image alt="facebook" src={require('../../assets/socialMedia/twitter.png')} />
            </button>
            <button type="button">
              <Image alt="facebook" src={require('../../assets/socialMedia/instagram.png')} />
            </button>
          </IconContainer>
        </CenteredContent>
        <ContactContainer>
          <ContactDetailsContainer>
            <ParagraphTextGrey>Phone: </ParagraphTextGrey>
            <ParagraphTextGrey>Email: </ParagraphTextGrey>
            <ParagraphTextGrey>DOB: </ParagraphTextGrey>
          </ContactDetailsContainer>
          <ContactDetailsContainer>
            <p>{friend.phone}</p> <p>{friend.email} </p> <p>{friend.dateOfBirth}</p>
          </ContactDetailsContainer>
        </ContactContainer>
      </Content>
    </ProfilePanelContainer>
  );
};

export default ProfilePanel;
