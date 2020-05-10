import React from 'react';
import styled from 'styled-components';

import home from '../assets/icons/home.png';
import inbox from '../assets/icons/inbox.png';
import notifications from '../assets/icons/notifications.png';
import options from '../assets/icons/options.png';
import sendGrey from '../assets/icons/sendGrey.png';
import settings from '../assets/icons/settings.png';
import users from '../assets/icons/users.png';
import currentUser from '../assets/users/MainUser.png';

const Wrapper = styled.div`
  background-color: #292f4c;
  height: 100vh;
  width: 7vw;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  background: none;
  margin-bottom: 5vh;
`;
const ButtonUser = styled.button`
  border: none;
  background: none;
  margin-bottom: 10vh;
  margin-top: 20%;
`;
const ButtonSettings = styled.button`
  width: 100%;
  border: none;
  background: none;
  padding-top: 30vh;
`;
const Image = styled.img`
  width: 25%;
  height: 25%;
`;
const ImageUser = styled.img`
  width: 50%;
  height: 50%;
`;

const NavigationPanel = () => {
  return (
    <Wrapper>
      <ButtonUser>
        <ImageUser src={currentUser} alt="current user" />
      </ButtonUser>
      <Button>
        <Image src={home} alt="home" />
      </Button>
      <Button>
        <Image src={sendGrey} alt="sendGrey" />
      </Button>
      <Button>
        <Image src={inbox} alt="inbox" />
      </Button>
      <Button>
        <Image src={users} alt="users" />
      </Button>
      <Button>
        <Image src={notifications} alt="notifications" />
      </Button>
      <Button>
        <Image src={options} alt="options" />
      </Button>
      <ButtonSettings>
        <Image src={settings} alt="settings" />
      </ButtonSettings>
    </Wrapper>
  );
};

export default NavigationPanel;
