import Marty from 'marty';

class Session extends Marty.SessionStorageStateSource {
  setToken(token) {
    this.set('token', token);
  }

  getToken() {
    return this.get('token');
  }

  logout() {
    this.clear('token');
  }

  clear(key) {
    this.storage.clear(key);
  }
}

export default Marty.register(Session);
