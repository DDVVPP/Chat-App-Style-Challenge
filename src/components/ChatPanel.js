import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292f4c;
  width: 38vw;
  margin-bottom: 3%;
`;

const ChatPanel = () => {
  return (
    <Wrapper>
      <p>ChatPanel</p>
    </Wrapper>
  );
};

export default ChatPanel;
