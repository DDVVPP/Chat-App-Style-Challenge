import styled from 'styled-components';
import { color, space, width, flexbox, borderRadius, border, shadow } from 'styled-system';

export const FriendCardFlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${borderRadius}
  ${space}

  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ContentContainer = styled.div`
  ${space}
`;
export const Button = styled.button`
  ${borderRadius}
  ${border}
  cursor: pointer;
  outline: none;
  &:hover {
    ${color}
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
export const FlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${width}
`;
export const ImageUser = styled.img`
  width: 15%;
  height: 15%;
  ${space}
`;
