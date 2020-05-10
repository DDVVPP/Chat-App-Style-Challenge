import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: white;
  width: 38vw;
  height: 100vh;
  margin-bottom: 3%;
  border-style: solid;
  border-width: 2px;
  border-color: #eeeeee;
`;

const NameText = styled.h1`
  font-size: 18px;
  text-align: left;
`;

const Users = () => {
  return (
    <Wrapper>
      <NameText>Users</NameText>
    </Wrapper>
  );
};

export default Users;
