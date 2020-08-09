import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInitialData } from "../actions/commonActions";

import "../style/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.onHamburgerToggle = this.onHamburgerToggle.bind(this);
  }

  componentDidMount() {
    this.props.getInitialData();
  }

  onHamburgerToggle() {
    this.props.onToggleSideMenu();
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-expand navbar-container navbar-dark bg-dark">
          <div className="navbar-left mr-auto">
            <i
              className="fas fa-bars hamburger-icon"
              onClick={this.onHamburgerToggle}
            ></i>
          </div>
          <a className="navbar-middle ml-auto mr-auto" href="/dashboard">
            <img
              src={require("../assets/logo.png")}
              height="30"
              width="60"
              alt=""
              className="navbar-logo"
            ></img>
            <span className="navbar-logo-text">Center For Literacy</span>
          </a>
          <div className="navbar-right ml-auto"></div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  common: PropTypes.object.isRequired,
  getInitialData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  common: state.common,
});

export default connect(mapStateToProps, { getInitialData })(Header);
