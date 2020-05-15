import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

export const Text = styled.p`
  ${color}
  ${space}
  ${typography}
`;

// for green online dot in navBar
export const StyledBadgeNavOnline = withStyles(() => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 4px #292f4c`,
  },
}))(Badge);

// for green online dot and white border
export const StyledBadgeOnline = withStyles(() => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 4px #fff`,
  },
  root: {
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
}))(Badge);

// for green online dot
export const StyledBadgeOnlineBlue = withStyles(() => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 4px #292f4c`,
  },
  root: {
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
}))(Badge);

// for grey offline dot
export const StyledBadgeOffline = withStyles(() => ({
  badge: {
    backgroundColor: '#d6d6d6',
    boxShadow: `0 0 0 4px #fff`,
  },
  root: {
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
  },
}))(Badge);

// for avatars
export const SmallAvatar = withStyles(() => ({
  root: {
    width: 30,
    height: 30,
    backgroundColor: '#f34848',
    fontSize: 14,
    marginTop: 8,
  },
}))(Avatar);
export const MediumAvatar = withStyles(() => ({
  root: {
    width: 46,
    height: 46,
  },
}))(Avatar);

export const LargeAvatar = withStyles(() => ({
  root: {
    width: 120,
    height: 120,
    marginLeft: '30%',
  },
}))(Avatar);

// for Navbar placeholder components
export const PlaceHolderContainer = styled.div`
  ${color}
  height: 100vh;
  width: 100vw;
`;
