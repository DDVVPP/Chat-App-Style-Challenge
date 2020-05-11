import styled from 'styled-components';

export const FriendCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  margin-top: 3%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ContentContainer = styled.div`
  margin: 3%;
`;
export const Button = styled.button`
  // background: ${({ buttonColor }) => (buttonColor ? '#292f4c' : 'none')};
  // color: ${({ buttonColor }) => (buttonColor ? 'white' : 'none')};
  border-radius: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    color: ${({ theme }) => theme.colors.white};
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
  width: 10%;
  height: 10%;
  margin-right: 2%;
`;
export const ParagraphTextGrey = styled.p`
  opacity: 50%;
`;
export const H3TextGrey = styled.h3`
  opacity: 50%;
`;
