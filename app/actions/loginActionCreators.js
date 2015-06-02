import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';
import UsersAPI from '../sources/usersApi';

class LoginActionCreators extends Marty.ActionCreators {
  attemptLogin(username, password, rememberMe = false) {
    UsersAPI.login(username, password).then(res => {
      if (res.status === 200) {
        this.dispatch(LoginConstants.RECEIVE_TOKEN, res.body.token);
        this.dispatch(LoginConstants.RECEIVE_USER, res.body.user);
        this.loggedIn(res.body.user);
        if (rememberMe) {
          this.dispatch(LoginConstants.REMEMBER_ME);
        }
      } else {
        this.dispatch(LoginConstants.LOGIN_FAILED, res.body.exception);
      }
    })
  }

  loggedIn(user) {
    if (Router.getCurrentPath() === '/login') {
      this.app.navigationActionCreators.navigateHome();
    }

    this.dispatch(LoginConstants.LOGGED_IN, user);
  }

  attemptReAuth() {
    if (this.app.loginQueries.getTokenFromStorage()) {
      this.app.loginQueries.getUser().then(user => this.loggedIn(user));
    }
  }

  logout() {
    this.dispatch(LoginConstants.LOGGED_OUT);
    console.log('logout');
    this.app.navigationActionCreators.navigateToLogin();
  }
}

export default LoginActionCreators;
