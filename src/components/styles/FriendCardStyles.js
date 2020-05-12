import styled from 'styled-components';
import { color, typography } from 'styled-system';

export const FriendCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin-top: 3%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ContentContainer = styled.div`
  margin: 3%;
`;
export const Button = styled.button`
  border-radius: 1rem;
  cursor: pointer;
  outline: none;
  &:hover {
    ${color}
  }
`;
export const FlexRowContainer = styled.div`
  display: flex;
  flext-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const ImageUser = styled.img`
  width: 13%;
  height: 13%;
  margin-right: 2%;
`;
export const ParagraphTextGrey = styled.p`
  opacity: 50%;
  ${typography}
  margin-top: 0.5rem;
`;
export const ParagraphText = styled.p`
  ${typography}
`;
export const H3TextGrey = styled.h3`
  ${typography}
  ${color}
  margin: 0;
`;
export const H2Text = styled.h2`
  ${typography}
  margin: 0;
`;
