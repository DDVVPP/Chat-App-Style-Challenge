import styled from 'styled-components';
import { color, typography, space, width, flexbox } from 'styled-system';

export const FlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${space}
`;
export const Searchbar = styled.div`
  display: flex;
  ${width}
  border-radius: 50px;
  border: none;
  ${color}
  img {
    align-self: center;
    padding: 0.5rem;
    margin-left: 1rem;
    max-width: 5%;
    height: auto;
  }
`;
export const Input = styled.input`
  border: none;
  ${width}
  ${color}
  outline: none;
  &::placeholder {
    opacity: 50%;
  }
`;
export const Image = styled.img`
  align-self: center;
  margin-left: 5%;
  max-width: 18%;
  height: auto;
`;
export const Button = styled.button`
  ${color}
  ${space}
  cursor: pointer;
  width: 100%;
  height: 50%;
  border-radius: 50%;
  transition-duration: 0.4s;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    color: white;
  }
`;
