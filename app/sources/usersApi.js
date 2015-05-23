import Marty from 'marty';
import {format} from 'util';
import config from '../config.json';

var base = config.API.ROOT;
var endpoint = base + 'users';

class UserHttpAPI extends Marty.HttpStateSource {
  login(email, password) {
    var url = format(endpoint + '/login');
    return this.post({
      url: url,
      body: {
        email: email,
        password: password
      }
    });
  }

  getSelf() {
    return this.get(endpoint + '/self')
  }
}

export default Marty.register(UserHttpAPI);
