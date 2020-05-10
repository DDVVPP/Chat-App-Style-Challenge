import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 22vw;
  border-left: 1px;
  height: 100vh;
`;
const Content = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
`;
const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;
const Link = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  // position: absolute;
`;
const Image = styled.img`
  align-self: center;
  // position: relative;
  max-width: 70%;
  height: auto;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2%;
`;
const ImageUser = styled.img`
  align-self: center;
  margin-bottom: 15%;
  width: 80%;
  height: auto;
`;
const NameText = styled.h1`
  font-size: 18px;
  text-align: center;
`;
const GreyText = styled.p`
  opacity: 50%;
  text-align: center;
`;
const GreyTextLarge = styled.h1`
  opacity: 50%;
  font-size: 20px;
  text-align: right;
`;
const GreyParagraphText = styled.p`
  opacity: 50%;
  text-align: right;
  margin-right: 2%;
`;
const ParagraphText = styled.p`
  text-align: left;
`;
const AboutMeText = styled.p`
  text-align: center;
`;
const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 1rem;
  transition-duration: 0.4s;
  &:hover {
    background-color: #f44a4a;
    color: white;
  }
`;
const ProfilePanel = ({ friend, setProfile }) => {
  const closeProfile = () => {
    setProfile(false);
  };
  return (
    <Wrapper>
      <Content>
        <Button onClick={closeProfile}>
          <GreyTextLarge>X</GreyTextLarge>
        </Button>
        <CenteredContent>
          <ImageUser alt="profile" src={friend.profilePhoto} />
          <NameText>
            {friend.firstName} {friend.lastName}
          </NameText>
          <GreyText>{friend.location}</GreyText>
          <AboutMeText>{friend.aboutMe}</AboutMeText>
          <Icons>
            <Link href={require('../assets/socialMedia/facebook.png')}>
              <Image alt="facebook" src={require('../assets/socialMedia/facebook.png')} />
            </Link>
            <Link href={require('../assets/socialMedia/twitter.png')}>
              <Image alt="facebook" src={require('../assets/socialMedia/twitter.png')} />
            </Link>
            <Link href={require('../assets/socialMedia/instagram.png')}>
              <Image alt="facebook" src={require('../assets/socialMedia/instagram.png')} />
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
