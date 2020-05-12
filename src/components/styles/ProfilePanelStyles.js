import styled from 'styled-components';
import { color } from 'styled-system';

export const ProfilePanelContainer = styled.div`
  ${color}
  width: 20vw;
  border-left: 1px;
  height: 100vh;
`;
export const Content = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
`;
export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
    margin-bottom: 15%;
    width: 80%;
    height: auto;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;
export const Image = styled.img`
  align-self: center;
  max-width: 70%;
  height: auto;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2%;
`;
export const H3GreyText = styled.h3`
  opacity: 50%;
  text-align: center;
`;
export const ParagraphTextGrey = styled.p`
  opacity: 50%;
  text-align: right;
  margin-right: 2%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  padding: 1rem;
  text-align: right;
  opacity: 30%;
  &:hover {
    opacity: 100%;
  }
`;
