import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color, space, typography, width } from 'styled-system';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
import theme from './components/styles/theme';
import Routes from './routes';

export const FlexContainer = styled.div`
  ${color}
  ${typography}
  ${width}
  height: 100vh;
display: flex;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FlexContainer width={1}>
        <NavigationPanel />
        <Routes />
      </FlexContainer>
    </ThemeProvider>
  );
};

export default App;
