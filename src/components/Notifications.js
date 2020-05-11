import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

const NameText = styled.h1`
  font-size: 18px;
  text-align: center;
`;

const Notifications = () => {
  return (
    <Wrapper>
      <NameText>Notifications</NameText>
    </Wrapper>
  );
};

export default Notifications;