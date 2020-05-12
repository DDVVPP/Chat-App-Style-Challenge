import styled from 'styled-components';
import { color, space, typography, width } from 'styled-system';

export const Container = styled.div`
  ${color}
  ${typography}
  ${width}
display: flex;
  height: auto;
`;

export const Text = styled.p`
  ${color}
  ${space}
  ${typography}
`;
