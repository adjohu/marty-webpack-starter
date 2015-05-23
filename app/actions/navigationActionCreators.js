import Marty from 'marty';
import Router from '../router';
import NavigationConstants from '../constants/navigationConstants';
import LoginActionCreators from '../actions/loginActionCreators';

class NavigationActionCreators extends Marty.ActionCreators {
  navigateHome() {
    navigateTo('home');
  }
  navigateToLogin() {
    navigateTo('login');
  }
  changeRoute(state) {
    this.dispatch(NavigationConstants.CHANGE_ROUTE);

    if (state.path === '/logout') {
      LoginActionCreators.logout();
    }
  }
}

function navigateTo(route, params = {}) {
  Router.transitionTo(route, params);
}

export default Marty.register(NavigationActionCreators);
