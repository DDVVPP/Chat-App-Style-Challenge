import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DirectMessaging from './components/DirectMessaging/DirectMessaging';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Send from './components/Send';
import Settings from './components/Settings';
import Users from './components/Users';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/send" component={Send} />
      <Route exact path="/inbox" component={DirectMessaging} />
      <Route path="/users" component={Users} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/options" component={Options} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export default Routes;
