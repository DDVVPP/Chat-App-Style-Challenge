import styled from 'styled-components';
import { color, space, width, flexbox, border, borderRadius } from 'styled-system';

export const FlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${space}
  ${width}
`;
export const Searchbar = styled.div`
  display: flex;
  ${width}
  ${borderRadius}
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
  ${border}
  ${width}
  ${color}
  outline: none;
  &::placeholder {
    opacity: 50%;
  }
`;
export const Image = styled.img`
  align-self: center;
  ${space}
  max-width: 20%;
  height: auto;
`;
export const Button = styled.button`
  ${color}
  ${space}
  cursor: pointer;
  width: 100%;
  height: 50%;
  ${borderRadius}
  transition-duration: 0.4s;
  outline: none;
  &:hover {
    ${color}
  }
`;
