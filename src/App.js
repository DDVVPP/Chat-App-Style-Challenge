import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
import GlobalStyle from './components/styles/globalStyle';
import theme from './components/styles/theme.ts';
import Routes from './routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <NavigationPanel />
        <Routes />
        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
