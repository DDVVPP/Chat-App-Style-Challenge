import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32vw;
  margin: 2%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 50px;
  border: none;
  width: 70%;
  background-color: #eeeeee;
`;
export const SearchBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Input = styled.input`
  border: none;
  width: 70%;
  background-color: transparent;
  padding: 1rem;
`;
export const GreyText = styled.h2`
  opacity: 50%;
`;
export const NameText = styled.h2`
  text-align: left;
`;
export const Button = styled.button`
  border: none;
  background: #f34848;
  cursor: pointer;
  color: white;
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
