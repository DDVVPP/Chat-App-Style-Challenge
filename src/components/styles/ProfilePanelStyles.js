import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  width: 22vw;
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
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10%;
`;
export const Link = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  // position: absolute;
`;
export const Image = styled.img`
  align-self: center;
  // position: relative;
  max-width: 70%;
  height: auto;
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContactDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2%;
`;
export const ImageUser = styled.img`
  align-self: center;
  margin-bottom: 15%;
  width: 80%;
  height: auto;
`;
export const NameText = styled.h1`
  font-size: 18px;
  text-align: center;
`;
export const GreyText = styled.p`
  opacity: 50%;
  text-align: center;
`;
export const GreyTextLarge = styled.h1`
  opacity: 50%;
  font-size: 20px;
  text-align: right;
`;
export const GreyParagraphText = styled.p`
  opacity: 50%;
  text-align: right;
  margin-right: 2%;
`;
export const ParagraphText = styled.p`
  text-align: left;
`;
export const AboutMeText = styled.p`
  text-align: center;
`;
export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 1rem;
  transition-duration: 0.4s;
  &:hover {
    background-color: #f44a4a;
    color: white;
  }
`;
