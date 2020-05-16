import styled from 'styled-components';
import { color, space, width, flexbox, border, shadow } from 'styled-system';

export const NavigationContainer = styled.div`
  ${color}
  ${width}
  display: flex;
  ${flexbox}
`;
export const InnerContainer = styled.div`
  ${color}
  ${width}
  display: flex;
  ${flexbox}
  height: 70%;
`;
export const UserImageContainer = styled.div`
  ${space}
  display: flex;
  ${flexbox}
`;

export const Button = styled.button`
  ${border}
  ${color}
  ${shadow}
  ${space}
  border: none;
  cursor: pointer;
  transition-duration: 0.4s;
  outline: none;
  &:hover {
    opacity: 1;
  }
  img {
    width: 40%;
    height: auto;
  }
`;
