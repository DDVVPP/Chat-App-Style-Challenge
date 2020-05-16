import { withKnobs, object } from '@storybook/addon-knobs/';
import React from 'react';

import FriendCard from '../components/DirectMessaging/FriendCard';

export default {
  title: 'Friend Card',
  component: FriendCard,

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

export const Card = () => <FriendCard selectedFriend={object('Friend', { ...userDetails })} />;

Card.story = {
  name: 'Friend Card',
};
