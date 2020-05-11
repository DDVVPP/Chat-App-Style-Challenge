import React from 'react';
import styled from 'styled-components';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
import GlobalStyle from './components/styles/globalStyle';
import Routes from './routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
function App() {
  return (
    <Wrapper>
      <NavigationPanel />
      <Routes />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
