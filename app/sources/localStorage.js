import Marty from 'marty';

class LocalStorage extends Marty.LocalStorageStateSource {
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

export default LocalStorage;
