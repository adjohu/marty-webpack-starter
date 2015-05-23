import Marty from 'marty';
import LoginConstants from '../constants/loginConstants';
import UsersApi from '../sources/usersApi';
import LoginStore from '../stores/loginStore';
import Session from '../sources/session';
import LocalStorage from '../sources/localStorage';


class LoginQueries extends Marty.Queries {
  getTokenFromStorage() {
    let token = Session.getToken() || LocalStorage.getToken();
    if (token) {
      this.dispatch(LoginConstants.RECEIVE_TOKEN, token);
      return token;
    }
  }

  getUser() {
    return UsersApi.for(this).getSelf().then(
      res => {
        if (res.status === 200) {
          this.dispatch(LoginConstants.RECEIVE_USER, res.body);
          return res.body;
        } else {
          this.dispatch(LoginConstants.RECEIVE_USER_FAILED);
        }
      }
    )
  }
}

export default Marty.register(LoginQueries);
