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
  const [highlight, setHighlight] = useState([
    { home: ['50%', 'none'] },
    { send: ['50%', 'none'] },
    { inbox: ['50%', 'none'] },
    { users: ['50%', 'none'] },
    { notifications: ['50%', 'none'] },
    { options: ['50%', 'none'] },
    { settings: ['50%', 'none'] },
  ]);

  return (
    <NavigationContainer
      flexDirection="column"
      justifyContent="space-between"
      bg="deepBlue"
      width="95px"
    >
      <InnerContainer mb={0} width={1} flexDirection="column" justifyContent="space-between">
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
        <InnerContainer flexDirection="column" justifyContent="space-between">
          <Link to="/home">
            <Button
              py={2}
              boxShadow={highlight[0].home[1]}
              opacity={highlight[0].home[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { send: ['50%', 'none'] },
                  { inbox: ['50%', 'none'] },
                  { users: ['50%', 'none'] },
                  { notifications: ['50%', 'none'] },
                  { options: ['50%', 'none'] },
                  { settings: ['50%', 'none'] },
                ]);
              }}
            >
              <img src={home} alt="home" />
            </Button>
          </Link>
          <Link to="/send">
            <Button
              py={2}
              boxShadow={highlight[1].send[1]}
              opacity={highlight[1].send[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['50%', 'none'] },
                  { send: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { inbox: ['50%', 'none'] },
                  { users: ['50%', 'none'] },
                  { notifications: ['50%', 'none'] },
                  { options: ['50%', 'none'] },
                  { settings: ['50%', 'none'] },
                ]);
              }}
            >
              <img src={sendWhite} alt="send" />
            </Button>
          </Link>
          <Link to="/inbox">
            <Button
              py={2}
              boxShadow={highlight[2].inbox[1]}
              opacity={highlight[2].inbox[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['50%', 'none'] },
                  { send: ['50%', 'none'] },
                  { inbox: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { users: ['50%', 'none'] },
                  { notifications: ['50%', 'none'] },
                  { options: ['50%', 'none'] },
                  { settings: ['50%', 'none'] },
                ]);
              }}
            >
              <img src={inbox} alt="inbox" />
            </Button>
          </Link>
          <Link to="/users">
            <Button
              py={2}
              boxShadow={highlight[3].users[1]}
              opacity={highlight[3].users[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['50%', 'none'] },
                  { send: ['50%', 'none'] },
                  { inbox: ['50%', 'none'] },
                  { users: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { notifications: ['50%', 'none'] },
                  { options: ['50%', 'none'] },
                  { settings: ['50%', 'none'] },
                ]);
              }}
            >
              <img src={users} alt="users" />
            </Button>
          </Link>
          <Link to="notifications">
            <Button
              py={2}
              boxShadow={highlight[4].notifications[1]}
              opacity={highlight[4].notifications[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['50%', 'none'] },
                  { send: ['50%', 'none'] },
                  { inbox: ['50%', 'none'] },
                  { users: ['50%', 'none'] },
                  { notifications: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { options: ['50%', 'none'] },
                  { settings: ['50%', 'none'] },
                ]);
              }}
            >
              <img src={notifications} alt="notifications" />
            </Button>
          </Link>
          <Link to="options">
            <Button
              py={3}
              boxShadow={highlight[5].options[1]}
              opacity={highlight[5].options[0]}
              bg="transparent"
              onClick={() => {
                setHighlight([
                  { home: ['50%', 'none'] },
                  { send: ['50%', 'none'] },
                  { inbox: ['50%', 'none'] },
                  { users: ['50%', 'none'] },
                  { notifications: ['50%', 'none'] },
                  { options: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
                  { settings: ['50%', 'none'] },
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
          py={2}
          mb={4}
          boxShadow={highlight[6].settings[1]}
          opacity={highlight[6].settings}
          bg="transparent"
          onClick={() => {
            setHighlight([
              { home: ['50%', 'none'] },
              { send: ['50%', 'none'] },
              { inbox: ['50%', 'none'] },
              { users: ['50%', 'none'] },
              { notifications: ['50%', 'none'] },
              { options: ['50%', 'none'] },
              { settings: ['100%', '12px 0px 7px -7px #ff3939 inset'] },
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

/* ------------------ ALTERNATE ATTEMPT ------------------- */
// Use Material-Ui list items to highlight navbar links.  Unable to customize icons' opacity onClick, and unable to access background highlight color. If I had more time I would dive into this further.

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

/* ------------------ ALTERNATE ATTEMPT -------------------- */
// Use of material-ui's badge.  Chose not to use it because it seems to require more code per button than what's implemented above.

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
