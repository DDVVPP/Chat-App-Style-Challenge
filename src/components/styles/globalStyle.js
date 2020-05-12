import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`

*
  h1 {
    font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${theme.fontSizes.heading[2]}px;
  text-align: left;
  margin: 0;
}
  h2 {
    font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.heading[1]}px;
  text-align: left;
  margin: 0;
}
  h3 {
    font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-size: ${(props) => props.theme.fontSizes.heading[0]}px;
  text-align: left;
  margin: 0;
}
p {
  font-family: ${(props) => props.theme.fontFamily[0]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.paragraph[1]}px;
  text-align: left;
}
button {
  background: 'none';
  border: none;
  cursor: pointer;
  transition-duration: 0.4s;
}
`;

export default GlobalStyle;
