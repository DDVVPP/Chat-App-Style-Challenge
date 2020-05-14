import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color, typography, width } from 'styled-system';

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

const Muitheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  console.log('THEME', Muitheme);
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
