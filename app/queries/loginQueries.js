import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';


class LoginQueries extends Marty.Queries {
  getTokenFromStorage() {
    let token = this.app.session.getToken() || this.app.localStorage.getToken();
    if (token) {
      this.dispatch(LoginConstants.RECEIVE_TOKEN, token);
      return token;
    }
  }

  getUser() {
    return this.app.userApi.getSelf().then(
      user => {
        this.dispatch(LoginConstants.RECEIVE_USER, user);
        return user;
      },

      err => this.dispatch(LoginConstants.RECEIVE_USER_FAILED)
    )
  }
}

export default LoginQueries;
