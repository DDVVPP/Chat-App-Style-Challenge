import styled from 'styled-components';
import { color, border, typography } from 'styled-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${color}
  align-content: space-between;
  width: 38vw;
  height: 100vh;
  border-style: solid;
  border-width: 2px;
  ${border};
`;
export const ContentWrapper = styled.div`
  margin: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  align-self: center;
  margin-right: 2%;
  max-width: 8%;
  height: auto;
`;
export const Image = styled.img`
  align-self: center;
  // padding: 0.5rem;
  // margin-left: 1rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 30%;
  height: auto;
`;
export const ImageMic = styled.img`
  align-self: center;
  max-width: 40%;
  height: auto;
`;
export const ImageEmoji = styled.img`
  align-self: center;
  max-width: 50%;
  height: auto;
`;
export const NameText = styled.h1`
  font-size: 18px;
  text-align: left;
`;
export const GreyText = styled.p`
  opacity: 50%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  width: 90%;
  background-color: #e9e9e9;
`;
export const StarBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;
  height: auto;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  ${color}
`;
export const Button = styled.button`
  width: 90%;
  border: none;
  background: none;
  cursor: pointer;
`;
export const ButtonPaperclip = styled.button`
  width: 20%;
  border: none;
  background: none;
  cursor: pointer;
`;
