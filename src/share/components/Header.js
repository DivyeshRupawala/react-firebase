import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { withCookies } from "react-cookie";
import { logout } from "../../login/login-actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  getLoginHeader() {
    const container = (
      <div>
        <Link to="logIn">LogIn</Link>
        <Link to="signUp">SignUp</Link>
      </div>
    );
    return container;
  }

  getLoggedInHeader(user) {
    const loggedContainer = (
      <div>
        <a>Welcome {user.firstName} </a>
        <Link to="home">Home</Link>
        <a href="" onClick={this.onLogout}>
          Logout
        </a>
      </div>
    );
    return loggedContainer;
  }

  onLogout(event) {
    event.preventDefault();
    this.props.cookies.remove("user");
    this.props.onLogout();
  }

  render() {
    console.log("Header..............");
    let { isUserLoggedIn, user, cookies } = this.props;

    if (isUserLoggedIn) {
      cookies.set("user", user, { path: "/" });
    } else {
      const userCookie = cookies.get("user");
      if (userCookie) {
        isUserLoggedIn = true;
        user = userCookie;
      }
    }

    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        <div className="menu-panel">
          {isUserLoggedIn
            ? this.getLoggedInHeader(user)
            : this.getLoginHeader()}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.authUser.isAuthUser,
  user: state.authUser.user
});

const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch(logout());
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(
  withCookies(Header)
);

export default container;
