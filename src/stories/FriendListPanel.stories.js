import { withKnobs, object } from '@storybook/addon-knobs';
import React from 'react';

import FriendCard from '../components/DirectMessaging/FriendCard';
import FriendCardContainer from '../components/DirectMessaging/FriendCardContainer';
import FriendListPanel from '../components/DirectMessaging/FriendListPanel';

export default {
  title: 'Friend List Panel',
  component: FriendListPanel,
  decorators: [withKnobs],
};

const userDetails = {
  userId: 1,
  firstName: 'Donald',
  lastName: 'Johnson',
  status: 'Online',
  profilePhoto: require('../assets/users/Donald.png'),
  messagesReceived: ['Placeholder', 'Analysis of foreign experience, as it is commo...'],
  timeStamp: '3h ago',
  reply: false,
  newMessages: true,
};

export const FriendList = () => {
  return (
    <>
      <FriendListPanel>
        <FriendCardContainer>
          <FriendCard selectedFriend={object('Friend1', { ...userDetails })} />
        </FriendCardContainer>

        <FriendCardContainer>
          <FriendCard selectedFriend={object('Friend2', { ...userDetails })} />
        </FriendCardContainer>

        <FriendCardContainer>
          <FriendCard selectedFriend={object('Friend3', { ...userDetails })} />
        </FriendCardContainer>
      </FriendListPanel>
    </>
  );
};

FriendList.story = {
  name: 'Friend List Panel',
};

/* ----------------- ATTEMPT ---------------- */
// I attempted different ways to interact with friendCard data in this Composite Component, but was ultimately unsuccessful.  Only able to use knob feature in friendCard component.
// One alternate attempt below:
/* import { userDetails } from './FriendCard.stories';

const defaultUserDetails = [
  object('Friend1', { ...userDetails }),
  object('Friend2', { ...userDetails }),
  object('Friend3', { ...userDetails }),
  object('Friend4', { ...userDetails }),
  object('Friend5', { ...userDetails }),
];

export const FriendList = () => {
  return (
    <FriendListPanel>
      <FriendCardContainer selectedFriend={defaultUserDetails} />
      <FriendCard selectedFriend={defaultUserDetails} />
    </FriendListPanel>
  );
};
 */
