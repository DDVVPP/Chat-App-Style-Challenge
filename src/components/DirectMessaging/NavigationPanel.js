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
  NavigationContainer,
  InnerContainer,
  Button,
  UserImageContainer,
} from '../styles/NavigationPanelStyles';
import { MediumAvatar, StyledBadgeNavOnline } from '../styles/globalStyle';

const NavigationPanel = () => {
  return (
    <NavigationContainer
      flexDirection="column"
      justifyContent="space-between"
      bg="deepBlue"
      width="95px"
    >
      <InnerContainer mb={0} width={1}>
        <UserImageContainer justifyContent="center" mt={4} mb={-8}>
          <StyledBadgeNavOnline
            overlap="circle"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            variant="dot"
          >
            <MediumAvatar alt="current user" src={currentUser} />
          </StyledBadgeNavOnline>
        </UserImageContainer>
        <InnerContainer>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/home')}
          >
            <img src={home} alt="home" />
          </Button>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/send')}
          >
            <img src={sendWhite} alt="send" />
          </Button>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/inbox')}
          >
            <img src={inbox} alt="inbox" />
          </Button>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/users')}
          >
            <img src={users} alt="users" />
          </Button>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/notifications')}
          >
            <img src={notifications} alt="notifications" />
          </Button>
          <Button
            opacity="50%"
            bg="transparent"
            onClick={() => (window.location.pathname = '/options')}
          >
            <img src={options} alt="options" />
          </Button>
        </InnerContainer>
      </InnerContainer>
      <Button
        mb={4}
        opacity="50%"
        bg="transparent"
        onClick={() => (window.location.pathname = '/settings')}
      >
        <img src={settings} alt="settings" />
      </Button>
    </NavigationContainer>
  );
};

export default NavigationPanel;
