import { action } from '@storybook/addon-actions';
import { text, withKnobs, object } from '@storybook/addon-knobs/';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import React from 'react';

import FriendCard from '../components/DirectMessaging/FriendCard';

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

export default {
  title: 'Friend Card',
  component: FriendCard,
  decorators: [withKnobs],
};

export const Card = () => <FriendCard selectedFriend={object('userDetails', { ...userDetails })} />;

Card.story = {
  name: 'Friend Card',
};
