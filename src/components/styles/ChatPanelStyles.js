import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: white;
  width: 38vw;
  height: 100vh;
  margin-bottom: 3%;
  border-style: solid;
  border-width: 2px;
  border-color: #eeeeee;
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
  // position: relative;
  max-width: 70%;
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
`;
export const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 2rem;
  width: 70%;
  background-color: #eeeeee;
`;
