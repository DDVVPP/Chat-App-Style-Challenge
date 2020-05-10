import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 22vw;
  margin-bottom: 3%;
`;
const ProfilePanel = ({ friend }) => {
  console.log(friend);
  return (
    <Wrapper>
      <img alt="profile" src={friend.profilePhoto} />
      <h1>
        {friend.firstName} {friend.lastName}
      </h1>
      <h4>{friend.location}</h4>
      <p>{friend.aboutMe}</p>
      <p>Phone: {friend.phone}</p>
      <p>Email: {friend.email}</p>
      <p>DOB: {friend.dateOfBirth}</p>
    </Wrapper>
  );
};

export default ProfilePanel;
