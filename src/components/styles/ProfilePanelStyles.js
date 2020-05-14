import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { color, width, space, flexbox } from 'styled-system';

export const ProfilePanelContainer = styled.div`
  ${color}
  ${width}
  ${space}
  border-left: 1px;
  flex: 1 0 1;
`;
export const FlexContainer = styled.div`
  ${space}
  display: flex;
  ${flexbox}
`;
export const StyledBadgeProfileOnline = withStyles(() => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 6px #fff`,
    marginLeft: '22%',
    marginTop: '4%',
    width: 15,
    height: 15,
    borderRadius: 50,
  },
}))(Badge);

export const StyledBadgeProfileOffline = withStyles(() => ({
  badge: {
    backgroundColor: '#d6d6d6',
    boxShadow: `0 0 0 6px #fff`,
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
  max-width: 80%;
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
