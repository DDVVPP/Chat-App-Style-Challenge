import React from 'react';
import styled from 'styled-components';

import NavigationPanel from './components/DirectMessaging/NavigationPanel';
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
    </Wrapper>
  );
}

export default App;
