import styled from 'styled-components';
import { color, space, flexbox, borderRadius, border, shadow } from 'styled-system';

import theme from './theme';

export const FriendCardFlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${borderRadius}
  ${space}
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
  ${borderRadius}
  ${border}
  ${color}
  cursor: pointer;
  outline: none;
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.deepBlue}
  }
`;
export const ButtonHighlighted = styled.button`
  ${borderRadius}
  ${border}
  ${color}
  ${shadow}
  cursor: pointer;
  outline: none;
`;
