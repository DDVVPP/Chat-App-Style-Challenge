import React from 'react';

import {
  Wrapper,
  Content,
  CenteredContent,
  Icons,
  Link,
  Image,
  ContactWrapper,
  ContactDetailsWrapper,
  ImageUser,
  NameText,
  GreyText,
  GreyParagraphText,
  ParagraphText,
  AboutMeText,
  Button,
  ButtonWrapper,
} from '../styles/ProfilePanelStyles';

const ProfilePanel = ({ friend, setProfile }) => {
  const closeProfile = () => {
    setProfile(false);
  };
  return (
    <Wrapper>
      <Content>
        <ButtonWrapper>
          <Button onClick={closeProfile}>X</Button>
        </ButtonWrapper>
        <CenteredContent>
          <ImageUser alt="profile" src={friend.profilePhoto} />
          <NameText>
            {friend.firstName} {friend.lastName}
          </NameText>
          <GreyText>{friend.location}</GreyText>
          <AboutMeText>{friend.aboutMe}</AboutMeText>
          <Icons>
            <Link href={require('../../assets/socialMedia/facebook.png')}>
              <Image alt="facebook" src={require('../../assets/socialMedia/facebook.png')} />
            </Link>
            <Link href={require('../../assets/socialMedia/twitter.png')}>
              <Image alt="facebook" src={require('../../assets/socialMedia/twitter.png')} />
            </Link>
            <Link href={require('../../assets/socialMedia/instagram.png')}>
              <Image alt="facebook" src={require('../../assets/socialMedia/instagram.png')} />
            </Link>
          </Icons>
        </CenteredContent>
        <ContactWrapper>
          <ContactDetailsWrapper>
            <GreyParagraphText>Phone: </GreyParagraphText>
            <GreyParagraphText>Email: </GreyParagraphText>
            <GreyParagraphText>DOB: </GreyParagraphText>
          </ContactDetailsWrapper>
          <ContactDetailsWrapper>
            <ParagraphText>{friend.phone}</ParagraphText>{' '}
            <ParagraphText>{friend.email} </ParagraphText>{' '}
            <ParagraphText>{friend.dateOfBirth}</ParagraphText>
          </ContactDetailsWrapper>
        </ContactWrapper>
      </Content>
    </Wrapper>
  );
};

export default ProfilePanel;
