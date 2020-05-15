/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  home,
  inbox,
  notifications,
  options,
  sendWhite,
  settings,
  users,
  currentUser,
} from '../../assets/index';
import {
  NavigationContainer,
  InnerContainer,
  Button,
  UserImageContainer,
} from '../styles/NavigationPanelStyles';
import { MediumAvatar, StyledBadgeNavOnline } from '../styles/globalStyle';

const NavigationPanel = () => {
  const [opacity, setOpacity] = useState([
    { home: '50%' },
    { send: '50%' },
    { inbox: '50%' },
    { users: '50%' },
    { notifications: '50%' },
    { options: '50%' },
    { settings: '50%' },
  ]);

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

// ALTERNATE ATTEMPT: use Material-Ui list items to highlight navbar links.  Unable to customize icons' opacity onClick, and unable to access background highlight color;

/* import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const [selectedIndex, setSelectedIndex] = React.useState(1);

const handleListItemClick = (event, index) => {
  setSelectedIndex(index);
};
<List component="nav" aria-label="main mailbox folders">
  <ListItem
    button
    selected={selectedIndex === 0}
    onClick={(event) => handleListItemClick(event, 0)}
  >
    <img src={home} alt="home" />
  </ListItem>
  <ListItem
    button
    selected={selectedIndex === 1}
    onClick={(event) => handleListItemClick(event, 1)}
  >
    <img src={sendWhite} alt="send" />
  </ListItem>
</List>; */

// ALTERNATE ATTEMPT: use of material-ui's badge.  Chose not to use it because it seems to require more code than what's implemented above.

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
