import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DirectMessaging from './components/DirectMessaging/DirectMessaging';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Send from './components/Send';
import Settings from './components/Settings';
import Users from './components/Users';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/send" component={Send} />
        <Route exact path="/inbox" component={DirectMessaging} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
