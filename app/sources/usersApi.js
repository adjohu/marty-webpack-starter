import Marty from 'marty';
import {format} from 'util';
import config from '../config.json';

var base = config.API.ROOT;
var endpoint = base + 'users';

function handleRes(res) {
  let json = res.json();
  if (res.ok) return json;
  throw new Error("Error in response", json, res);
}

class UserHttpAPI extends Marty.HttpStateSource {
  login(email, password) {
    var url = format(endpoint + '/login');
    return this.post({
      url: url,
      body: {
        email: email,
        password: password
      }
    }).then(handleRes);
  }

  getSelf() {
    return this.get(endpoint + '/self').then(handleRes)
  }
}

export default UserHttpAPI;
