import React from 'react'
import Marty from 'marty';
import LoginForm from '../components/loginForm';
import Panel from 'react-bootstrap/lib/Panel';

class LoginPage extends React.Component {
  handleLogin(payload) {
    this.app.loginActionCreators.attemptLogin(payload.email, payload.password, payload.rememberMe);
  }

  render(){
    let error = this.props.error ? <div>{this.props.error}</div> : null;

    return (
      <div className="container">
        <Panel>
          <h1>Login</h1>
          <LoginForm onSubmit={this.handleLogin.bind(this)} />
        </Panel>
        {error}
      </div>
    );
  }
}

LoginPage.propTypes = {

};

export default Marty.createContainer(LoginPage, {
  listenTo: ['loginStore'],
  fetch: {
    error() {
      return this.app.loginStore.getError();
    }
  }
});
