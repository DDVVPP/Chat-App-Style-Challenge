import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color, typography, width } from 'styled-system';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
import Muitheme from './components/styles/muiTheme';
import theme from './components/styles/theme';
import Routes from './routes';

export const FlexContainer = styled.div`
  height: 100vh;
  display: flex;
  ${color}
  ${typography}
  ${width}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={Muitheme}>
        <FlexContainer width={1}>
          <NavigationPanel />
          <Routes />
        </FlexContainer>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
