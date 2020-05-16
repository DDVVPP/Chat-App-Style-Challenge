import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { color, width, space, flexbox } from 'styled-system';

import theme from './theme';

export const ProfilePanelContainer = styled.div`
  ${color}
  ${width}
  ${space}
`;
export const FlexContainer = styled.div`
  ${space}
  display: flex;
  ${flexbox}
`;
export const StyledBadgeProfileOnline = withStyles(() => ({
  badge: {
    backgroundColor: theme.colors.onlineGreen,
    boxShadow: `0 0 0 6px ${theme.colors.white}`,
    marginLeft: '22%',
    marginTop: '4%',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
}))(Badge);

export const StyledBadgeProfileOffline = withStyles(() => ({
  badge: {
    backgroundColor: theme.colors.offLineGrey,
    boxShadow: `0 0 0 6px ${theme.colors.white}`,
    marginLeft: '22%',
    marginTop: '4%',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
}))(Badge);

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 50%;
  }
`;
export const ImageIcon = styled.img`
  align-self: center;
  max-width: 70%;
  height: auto;
`;
export const Button = styled.button`
  background: none;
  border: none;
  text-align: right;
  cursor: pointer;
  outline: none;
  ${color}
  &:hover {
    opacity: 100%;
  }
  ${width}
`;
