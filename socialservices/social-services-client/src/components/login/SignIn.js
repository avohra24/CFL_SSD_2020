import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../style/Login.css";

class SignIn extends Component {
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
                <div className="scllb-text">Hello,Friend!</div>
                <div className="scllb-details">
                  Enter your personal details and start journey with us
                </div>
                <a className="scllb-button" href="/login">
                  SIGN UP
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
                    type="button"
                    value="SIGN IN"
                    className="sclrb-button"
                    onClick={this.onSubmit}
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

export default withRouter(SignIn);
