import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';

class LoginStore extends Marty.Store {
  constructor(options) {
    super(options);

    this.state = {
      error: null,
      user: false,
      token: false
    };

    this.handlers = {
      loginFailed: LoginConstants.LOGIN_FAILED,
      gotToken: LoginConstants.RECEIVE_TOKEN,
      gotUser: LoginConstants.RECEIVE_USER,
      onLoggedIn: LoginConstants.LOGGED_IN,
      onLoggedOut: LoginConstants.LOGGED_OUT,
      rememberMe: LoginConstants.REMEMBER_ME
    };

  }

  loginFailed(exception) {
    this.setState({error: exception});
  }

  /**
  * Remembers a user for a longer period than the this.app.session
  */
  rememberMe() {
    this.app.localStorage.setToken(this.state.token);
  }

  gotToken(token) {
    this.app.session.setToken(token);
    this.setState({token: token});
  }

  gotUser(user) {
    this.setState({user: user});
  }

  onLoggedIn() {
    console.log('login successful');

    this.setState({error: null});
  }

  onLoggedOut() {
    console.log('loggedOut');

    this.app.session.logout();
    this.app.localStorage.logout();

    this.setState({
      token: null,
      user: null
    });
  }

  getUser() {
    return this.fetch({
      id: 'get-user',
      locally() {
        if (this.state.user) {
          return this.state.user;
        }
      },
      remotely() {
        return this.app.loginQueries.for(this).getUser();
      }
    })
  }

  isLoggedIn() {
    return !!this.state.user;
  }


  getError() {
    return this.state.error;
  }

  getToken() {
    return this.state.token;
  }
}

export default LoginStore;
