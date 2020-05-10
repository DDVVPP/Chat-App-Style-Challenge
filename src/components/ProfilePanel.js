import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292f4c;
  width: 22vw;
  margin-bottom: 3%;
`;
const ProfilePanel = () => {
  return (
    <Wrapper>
      <p>ProfilePanel</p>
    </Wrapper>
  );
};

export default ProfilePanel;
