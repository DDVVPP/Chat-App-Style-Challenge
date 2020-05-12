import React from 'react';
import { ThemeProvider } from 'styled-components';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
import { Container } from './components/styles/globalStyle';
import theme from './components/styles/theme';
import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container width={1}>
        <NavigationPanel />
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
