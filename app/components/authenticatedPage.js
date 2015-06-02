import React from 'react';
import Marty from 'marty';

/**
* Used for creating pages which require authentication.
*
* Given a component and an array of allowedRoles:
* Automatically redirects away if current user in LoginStore does not match any of the allowed roles
*/
export default function(OriginalComponent, allowedRoles) {
  let extendedComponent =  class extends React.Component {

    componentWillMount() {
      if(!this.app.loginStore.isLoggedIn()){
        return this.app.navigationActionCreators.navigateToLogin();
      }
    }

    render() {
      return <OriginalComponent {...this.props} />
    }
  }

  let container = Marty.createContainer(extendedComponent);
  container.allowedRoles = allowedRoles;
  return container;
}
