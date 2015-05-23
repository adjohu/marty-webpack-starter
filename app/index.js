import React from 'react';
import Marty from 'marty';

// TODO: find somewhere better to load this.
import HttpHooks from './sources/httpHooks';

import Router from './router';
import NavigationActionCreators from './actions/navigationActionCreators';

// Uncomment for dev tools
// window.React = React;
// window.Marty = Marty;

Router.run((Handler, state) => {
  NavigationActionCreators.changeRoute(state, Handler);
  React.render(<Handler {...state.params} />, document.getElementById('app'))
});
