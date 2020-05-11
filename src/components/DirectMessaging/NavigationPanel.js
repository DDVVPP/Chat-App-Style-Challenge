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
  Wrapper,
  CenterButtonWrapper,
  Button,
  UserImageWrapper,
  ButtonSettingsWrapper,
  ButtonSettings,
  Image,
  ImageUser,
} from '../styles/NavigationPanelStyles';

const NavigationPanel = () => {
  return (
    <Wrapper>
      <UserImageWrapper>
        <ImageUser src={currentUser} alt="current user" />
      </UserImageWrapper>
      <CenterButtonWrapper>
        <Button onClick={() => (window.location.pathname = '/home')}>
          <Image src={home} alt="home" />
        </Button>
        <Button onClick={() => (window.location.pathname = '/send')}>
          <Image src={sendWhite} alt="send" />
        </Button>
        <Button onClick={() => (window.location.pathname = '/inbox')}>
          <Image src={inbox} alt="inbox" />
        </Button>
        <Button onClick={() => (window.location.pathname = '/users')}>
          <Image src={users} alt="users" />
        </Button>
        <Button onClick={() => (window.location.pathname = '/notifications')}>
          <Image src={notifications} alt="notifications" />
        </Button>
        <Button onClick={() => (window.location.pathname = '/options')}>
          <Image src={options} alt="options" />
        </Button>
      </CenterButtonWrapper>
      <ButtonSettingsWrapper>
        <ButtonSettings onClick={() => (window.location.pathname = '/settings')}>
          <Image src={settings} alt="settings" />
        </ButtonSettings>
      </ButtonSettingsWrapper>
    </Wrapper>
  );
};

export default NavigationPanel;
