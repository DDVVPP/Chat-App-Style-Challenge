/* eslint-disable no-return-assign */
import React from 'react';

import home from '../../assets/icons/home.png';
import inbox from '../../assets/icons/inbox.png';
import notifications from '../../assets/icons/notifications.png';
import options from '../../assets/icons/options.png';
import sendWhite from '../../assets/icons/sendWhite.png';
import settings from '../../assets/icons/settings.png';
import users from '../../assets/icons/users.png';
import currentUser from '../../assets/users/MainUser.png';
import {
  Container,
  CenterButtonContainer,
  Button,
  UserImageContainer,
  ButtonSettingsContainer,
  ButtonSettings,
} from '../styles/NavigationPanelStyles';

const NavigationPanel = () => {
  return (
    <Container bg="deepBlue">
      <UserImageContainer>
        <img src={currentUser} alt="current user" />
      </UserImageContainer>
      <CenterButtonContainer>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/home')}>
          <img src={home} alt="home" />
        </Button>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/send')}>
          <img src={sendWhite} alt="send" />
        </Button>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/inbox')}>
          <img src={inbox} alt="inbox" />
        </Button>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/users')}>
          <img src={users} alt="users" />
        </Button>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/notifications')}>
          <img src={notifications} alt="notifications" />
        </Button>
        <Button bg="transparent" onClick={() => (window.location.pathname = '/options')}>
          <img src={options} alt="options" />
        </Button>
      </CenterButtonContainer>
      <ButtonSettingsContainer>
        <ButtonSettings bg="transparent" onClick={() => (window.location.pathname = '/settings')}>
          <img src={settings} alt="settings" />
        </ButtonSettings>
      </ButtonSettingsContainer>
    </Container>
  );
};

export default NavigationPanel;
