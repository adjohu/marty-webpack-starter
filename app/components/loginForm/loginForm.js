import React from 'react'
import styles from './loginForm.scss';

class LoginForm extends React.Component {
  handleLogin() {
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var rememberMe = this.refs.rememberMe.getDOMNode().checked;

    this.props.onSubmit({
      email: email,
      password: password,
      rememberMe: rememberMe
    });
  }

  render(){
    return(
      <form className={styles.form} onSubmit={this.handleLogin.bind(this)}>
        <div>
          <label>
            Email
            <input type="email" ref="email" />
          </label>
        </div>

        <div>
          <label>
            Password
            <input type="password" ref="password" />
          </label>
        </div>

        <div>
          <label>
            Remember me
            <input type="checkbox" ref="rememberMe" />
          </label>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
};

export default LoginForm;
