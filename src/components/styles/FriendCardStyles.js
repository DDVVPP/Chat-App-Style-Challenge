import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  margin-top: 3%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ContentWrapper = styled.div`
  margin: 3%;
`;
export const Button = styled.button`
  border: none;
  // background: ${({ buttonColor }) => (buttonColor ? '#292f4c' : 'none')};
  // color: ${({ buttonColor }) => (buttonColor ? 'white' : 'none')};
    background: 'none';
  cursor: pointer;
  border-radius: 1rem;
  transition-duration: 0.4s;
  &:hover {
    background-color: #292f4c;
    color: white;
  }
`;
export const ProfileSummaryWrapper = styled.div`
  display: flex;
  flext-direction: row;
`;
export const NameTimeWrapper = styled.div`
  display: flex;
  flext-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const ImageUser = styled.img`
  width: 10%;
  height: 10%;
  margin-right: 2%;
`;
export const NameText = styled.h1`
  font-size: 18px;
  text-align: left;
`;
export const GreyText = styled.p`
  opacity: 50%;
`;
export const ParagraphText = styled.p`
  fon-size: 12px;
  text-align: left;
`;
