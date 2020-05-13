import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { color, space, typography, width } from 'styled-system';

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
