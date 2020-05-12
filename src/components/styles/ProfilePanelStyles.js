import styled from 'styled-components';
import { color, typography } from 'styled-system';

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
    width: 60%;
    height: auto;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;
export const Icon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 100%;
  &:hover {
    opacity: 50%;
  }
`;
export const Image = styled.img`
  align-self: center;
  max-width: 100%;
  height: auto;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1Text = styled.h1`
  ${color}
  ${typography}
`;
export const H3GreyText = styled.h3`
  ${color}
  ${typography}
  margin:0;
`;
export const ParagraphText = styled.p`
  ${typography}
`;
export const ParagraphTextGrey = styled.p`
  ${color}
  ${typography}
margin-right: .5rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Button = styled.button`
  background: none;
  border: none;
  text-align: right;
  cursor: pointer;
  ${color}
  &: hover {
    opacity: 100%;
  }
`;
