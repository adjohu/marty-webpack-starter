import React from 'react';
import {RouteHandler} from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss';


class Layout extends React.Component {
  render() {
    var name = this.context.router.getCurrentPath();

    return (
      <div>
        <div key={name} className="route-holder">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.func
}

export default Layout;
