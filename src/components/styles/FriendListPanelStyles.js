import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  margin: 1vw;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  width: 80%;
  background-color: #e9e9e9;
`;
export const SearchBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2%;
`;
export const StarBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;
  height: auto;
`;
export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
`;
export const GreyText = styled.p`
  opacity: 0.5;
  margin-right: 5%;
`;
export const NameText = styled.p`
  text-align: left;
`;
export const Button = styled.button`
  border: none;
  background: #f34848;
  cursor: pointer;
  color: white;
  height: 3rem;
  width: 3rem;
  text-align: center;
  align-self: center;
  border-radius: 50px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #292f4c;
    color: white;
  }
`;
export const Image = styled.img`
  align-self: center;
  padding: 1rem;
  margin-left: 2rem;
  max-width: 5%;
  height: auto;
`;
export const ImageBadge = styled.img`
  align-self: center;
  margin-left: 5%;
  max-width: 15%;
  height: auto;
`;
