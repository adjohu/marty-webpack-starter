import React from 'react';
import Marty from 'marty';
import Application from './application';
import Layout from './layout';
let {ApplicationContainer} = Marty;

let app = new Application();

window.React = React;
window.Marty = Marty;

app.router.run((Handler, state) => {
  app.navigationActionCreators.changeRoute(state, Handler);

  React.render((
    <ApplicationContainer app={app}>
      <Handler {...state.params} />
    </ApplicationContainer>
  ), document.getElementById('app'));
});
