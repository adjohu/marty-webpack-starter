import Marty from 'marty';
import NavigationConstants from '../constants/navigationConstants';

class NavigationActionCreators extends Marty.ActionCreators {
  navigateHome() {
    this.navigateTo('home');
  }
  navigateToLogin() {
    this.navigateTo('login');
  }

  changeRoute(state) {
    this.dispatch(NavigationConstants.CHANGE_ROUTE, state);

    if (state.path === '/logout') {
      this.app.loginActionCreators.logout();
    }
  }

  navigateTo(route, params={}) {
    console.log('navigate to', route, params);
    this.app.router.transitionTo(route, params);
  }
}


export default NavigationActionCreators;
