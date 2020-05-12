import styled from 'styled-components';
import { color, typography, space, width } from 'styled-system';

export const FriendCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
  ${space}
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ContentContainer = styled.div`
  ${space}
`;
export const Button = styled.button`
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover {
    ${color}
  }
`;
export const FlexRowContainer = styled.div`
  display: flex;
  flext-direction: row;
  ${width}
  justify-content: space-between;
`;
export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ImageUser = styled.img`
  width: 15%;
  height: 15%;
  ${space}
`;
export const Text = styled.p`
  ${color}
  ${space}
  ${typography}
`;
