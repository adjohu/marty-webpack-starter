import React from 'react';
import LoginStore from '../stores/loginStore';
import NavigationActionCreators from '../actions/navigationActionCreators';

/**
* Used for creating pages which require authentication.
*
* Given a component and an array of allowedRoles:
* Automatically redirects away if current user in LoginStore does not match any of the allowed roles
*/
export default function(OriginalComponent) {
  let extendedComponent =  class extends React.Component {

    static willTransitionTo(transition, params, query, callback) {
      if(!LoginStore.isLoggedIn()){
          return NavigationActionCreators.navigateToLogin();
      }
      callback();
    }

    render() {
      return <OriginalComponent {...this.props} />
    }
  }

  return extendedComponent;
}
