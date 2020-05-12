import styled from 'styled-components';
import { color } from 'styled-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${color}
  height: 100vh;
  width: 6vw;
`;
export const UserImageContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
    height: auto;
  }
`;
export const CenterButtonContainer = styled.div`
  margin-bottom: 5vh;
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  ${color}
  margin-bottom: 5vh;
  cursor: pointer;
  opacity: 0.5;
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
  img {
    width: 28%;
    height: auto;
  }
`;
export const ButtonSettingsContainer = styled.div`
  margin-bottom: 5vh;
`;
export const ButtonSettings = styled.button`
  width: 100%;
  border: none;
  ${color}
  cursor: pointer;
  opacity: 0.5;
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
  img {
    width: 28%;
    height: auto;
  }
`;
