/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  // const [opacity, setOpacity] = useState('50%');
  const [opacity, setOpacity] = useState([
    { home: '50%' },
    { send: '50%' },
    { inbox: '50%' },
    { users: '50%' },
    { notifications: '50%' },
    { options: '50%' },
    { settings: '50%' },
  ]);

  // const setClickedIcons = (iconName) => {
  //   clickedIcons.map((iconObj) => {
  //     if (iconObj[iconName] === false) {
  //       iconObj[iconName] = true;
  //     }

  //     return clickedIcons;
  //   });
  // };

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
          <Link to="/home">
            <Button
              opacity={opacity[0].home}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '100%' },
                  { send: '50%' },
                  { inbox: '50%' },
                  { users: '50%' },
                  { notifications: '50%' },
                  { options: '50%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={home} alt="home" />
            </Button>
          </Link>
          <Link to="/send">
            <Button
              opacity={opacity[1].send}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '50%' },
                  { send: '100%' },
                  { inbox: '50%' },
                  { users: '50%' },
                  { notifications: '50%' },
                  { options: '50%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={sendWhite} alt="send" />
            </Button>
          </Link>
          <Link to="/inbox">
            <Button
              opacity={opacity[2].inbox}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '50%' },
                  { send: '50%' },
                  { inbox: '100%' },
                  { users: '50%' },
                  { notifications: '50%' },
                  { options: '50%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={inbox} alt="inbox" />
            </Button>
          </Link>
          <Link to="/users">
            <Button
              opacity={opacity[3].users}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '50%' },
                  { send: '50%' },
                  { inbox: '50%' },
                  { users: '100%' },
                  { notifications: '50%' },
                  { options: '50%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={users} alt="users" />
            </Button>
          </Link>
          <Link to="notifications">
            <Button
              opacity={opacity[4].notifications}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '50%' },
                  { send: '50%' },
                  { inbox: '50%' },
                  { users: '50%' },
                  { notifications: '100%' },
                  { options: '50%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={notifications} alt="notifications" />
            </Button>
          </Link>
          <Link to="options">
            <Button
              opacity={opacity[5].options}
              bg="transparent"
              onClick={() => {
                setOpacity([
                  { home: '50%' },
                  { send: '50%' },
                  { inbox: '50%' },
                  { users: '50%' },
                  { notifications: '50%' },
                  { options: '100%' },
                  { settings: '50%' },
                ]);
              }}
            >
              <img src={options} alt="options" />
            </Button>
          </Link>
        </InnerContainer>
      </InnerContainer>
      <Link to="settings">
        <Button
          mb={4}
          opacity={opacity[6].settings}
          bg="transparent"
          onClick={() => {
            setOpacity([
              { home: '50%' },
              { send: '50%' },
              { inbox: '50%' },
              { users: '50%' },
              { notifications: '50%' },
              { options: '50%' },
              { settings: '100%' },
            ]);
          }}
        >
          <img src={settings} alt="settings" />
        </Button>
      </Link>
    </NavigationContainer>
  );
};

export default NavigationPanel;

// Alternate: use of material-ui's badge.  Chose not to use it because it seems to require more code than what's implemented above.

/* export const StyledBadgeNavRed = withStyles(() => ({
  badge: {
    backgroundColor: 'red',
    boxShadow: `0 0 0 4px #292f4c`,
    marginRight: 10,
  },
}))(Badge);
 <StyledBadgeNavRed
  overlap="circle"
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',

  }}
  variant="dot"
>
  <Button
    opacity="50%"
    bg="transparent"
    onClick={() => (window.location.pathname = '/home')}
  >
    <img src={home} alt="home" />
  </Button>
</StyledBadgeNavRed> */
