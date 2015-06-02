import Marty from 'marty';
import LoginStore from '../stores/loginStore';
import config from '../config.json';

function createAuthHeader(token) {
  let scheme = config.API.AUTH_SCHEME;
  return `${scheme} token=${token}`;
};

Marty.HttpStateSource.addHook({
  id: 'addToken',

  before(req) {
    let token = this.app.loginStore.getToken();
    if (token) {
      req.headers['Authorization'] = createAuthHeader(token);
    }
  }
});
