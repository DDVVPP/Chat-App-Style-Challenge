import styled from 'styled-components';
import { color, border, borderRadius, width, space, flexbox } from 'styled-system';

export const ContentContainer = styled.div`
  display: flex;
  ${flexbox}
  height: 100%;
  ${space}
`;
export const FlexContainer = styled.div`
  display: flex;
  ${flexbox}
  ${color}
  ${width}
  ${border}
  ${borderRadius}
  ${space}
`;
export const ImageUser = styled.img`
  width: 10%;
  ${space}
`;
export const Image = styled.img`
  align-self: center;
  ${space}
  max-width: 30%;
  height: auto;
`;
export const ImageEmojiMic = styled.img`
  align-self: center;
  max-width: 40%;
  height: auto;
`;
export const Input = styled.input`
  border: none;
  ${width}
  outline: none;
  ${color};
`;
export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  ${space}
  ${width}
`;
