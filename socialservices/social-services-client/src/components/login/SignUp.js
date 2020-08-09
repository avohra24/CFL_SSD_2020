import React, { Component } from "react";
import "../../style/Login.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.handler();
  }

  onSubmit() {
    this.props.handler();
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <div className="container-login">
          <div className="sub-container-login">
            <div className="scl-left">
              <div className="scll-header">
                <div className="scll-logo"></div>
              </div>
              <div className="scll-body">
                <div className="scllb-text">Welcome Back!</div>
                <div className="scllb-details">
                  To keep connected with us please login with your personal info
                </div>
                <a className="scllb-button" href="/signin">
                  SIGN IN
                </a>
              </div>
            </div>
            <div className="scl-right">
              <div className="sclr-header">
                <div className="sclrh-text">Create Account</div>
              </div>
              <div className="sclr-body">
                <form>
                  <div className="sclrb-field">
                    <i
                      className="fa fa-user fa-xs sclrb-icon-field"
                      aria-hidden="true"
                    ></i>
                    <input
                      className="sclrb-input-field"
                      type="text"
                      placeholder="Name"
                      name="Name"
                    />
                  </div>
                  <div className="sclrb-field">
                    <i
                      className="fa fa-envelope fa-xs sclrb-icon-field"
                      aria-hidden="true"
                    ></i>
                    <input
                      className="sclrb-input-field"
                      type="text"
                      placeholder="Email"
                      name="Email"
                    />
                  </div>
                  <div className="sclrb-field">
                    <i
                      className="fa fa-key fa-xs sclrb-icon-field"
                      aria-hidden="true"
                    ></i>
                    <input
                      className="sclrb-input-field"
                      type="password"
                      placeholder="Password"
                      name="Password"
                    />
                  </div>
                  <input
                    type="submit"
                    value="SIGN UP"
                    className="sclrb-button"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
