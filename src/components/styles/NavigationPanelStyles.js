import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #292f4c;
  height: 100vh;
  width: 7vw;
`;
export const CenterButtonWrapper = styled.div`
  margin-bottom: 5vh;
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  background: none;
  margin-bottom: 5vh;
  cursor: pointer;
  opacity: 0.5;
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
`;
export const UserImageWrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
`;
export const ButtonSettingsWrapper = styled.div`
  margin-bottom: 5vh;
`;
export const ButtonSettings = styled.button`
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.5;
  transition-duration: 0.4s;
  &:hover {
    opacity: 1;
  }
`;
export const Image = styled.img`
  width: 25%;
  height: auto;
`;
export const ImageUser = styled.img`
  width: 50%;
  height: auto;
`;
