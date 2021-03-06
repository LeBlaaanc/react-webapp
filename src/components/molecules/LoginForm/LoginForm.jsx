import React, { PropTypes }   from 'react';
import { connect }   from 'react-redux';
import Formsy from 'formsy-react';
import { Input, Row } from 'formsy-react-components';

import * as authActions        from 'actions/AuthActions';

@connect(
  state => ({auth: state.auth}),
  authActions)
export default class LoginForm extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isValid: false
    };
  }

  handleSubmit(model) {
    this.props.login(model);
  }

  handleValid() {
    this.setState({isValid: true});
  }

  handleInvalid() {
    this.setState({isValid: false});
  }
  
  render() {
    return (
      <div className="loginForm">
        <div className="loginForm-inner">
          <Formsy.Form onSubmit={this.handleSubmit.bind(this)} onValid={this.handleValid.bind(this)} onInvalid={this.handleInvalid.bind(this)}>
            <Input layout="vertical" label="Email" name="email" validations="isEmail" validationError="Email must be valid." required/>
            <Input layout="vertical" label="Password" name="password" type="password" validations="minLength:6" validationError="Password must be at least 6 characters." required/>
            <button type="submit" className="btn btn-block btn-primary btn-pill" disabled={!this.state.isValid}>Login</button>
          </Formsy.Form>
        </div>
      </div>
    );
  }
}
