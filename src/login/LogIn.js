import React from "react";
import { Card, Button, CardBody, CardTitle } from "reactstrap";
import { Form } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { login } from "./login-actions";
import InputWithLabel from "../share/components/InputWithLabel";

const LogIn = ({ onLogin = f => f }) => {
  let _email, _password;

  const login = () => {
    onLogin(_email, _password);
  };

  const onEmailChangeHandler = event => {
    _email = event.target.value;
  };

  const onPasswordChangeHandler = event => {
    _password = event.target.value;
  };

  return (
    <div className="login">
      <Card>
        <CardTitle>Log in</CardTitle>
        <CardBody>
          <Form>
            <InputWithLabel
              id="email"
              label="Email"
              type="email"
              onChangeValue={onEmailChangeHandler}
            />
            <InputWithLabel
              id="password"
              label="Password"
              type="password"
              onChangeValue={onPasswordChangeHandler}
            />
            <Button onClick={login}>Log In</Button>
            <Button>Cancel</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onLogin(email, password) {
    dispatch(login(email, password));
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default withRouter(container);
