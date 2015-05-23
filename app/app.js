import React from 'react';
import Marty from 'marty';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;
import LoginStore from './stores/loginStore';
import LoginActionCreators from './actions/loginActionCreators';
LoginActionCreators.attemptReAuth();

import config from './config.json';

import Navbar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    var name = this.context.router.getCurrentPath();

    return (
      <div className="container">
        <Navbar isLoggedIn={this.props.isLoggedIn} />
        <h1>{config.APP_NAME}</h1>
        <div key={name}>
	        <RouteHandler />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func
};

export default Marty.createContainer(App, {
  listenTo: [LoginStore],
  fetch: {
    isLoggedIn() {
      return LoginStore.isLoggedIn();
    }
  }
});
