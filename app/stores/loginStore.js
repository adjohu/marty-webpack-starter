import _ from 'lodash';
import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';
import LoginQueries from '../queries/loginQueries';
import Session from '../sources/session';
import LocalStorage from '../sources/localStorage';

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
  * Remembers a user for a longer period than the Session
  */
  rememberMe() {
    LocalStorage.setToken(this.state.token);
  }

  gotToken(token) {
    Session.setToken(token);
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

    Session.logout();
    LocalStorage.logout();

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
        return LoginQueries.for(this).getUser();
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

export default Marty.register(LoginStore);
