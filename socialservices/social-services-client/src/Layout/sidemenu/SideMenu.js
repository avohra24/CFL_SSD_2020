import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import SideMenuElement from "./SideMenuElement";
import { SIDE_MENU } from "../../constants/side-menu";
import "../../style/Dashboard.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePageName } from "../../actions/commonActions";
import { reinitializeStudent } from "../../actions/studentActions";

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  onSelectHandler(component) {
    this.props.onSideMenuSelect();
    this.props.reinitializeStudent();
    console.log(component);
    this.props.history.push("/" + component);
  }

  render() {
    const elements = SIDE_MENU;

    return (
      <Nav className="sidebar">
        {elements.map((element) => (
          <SideMenuElement
            key={element.id}
            component={element.component}
            componentName={element.name}
            componentIcon={element.icon}
            onSelect={this.onSelectHandler}
          ></SideMenuElement>
        ))}
      </Nav>
    );
  }
}

SideMenu.propTypes = {
  common: PropTypes.object.isRequired,
  updatePageName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  common: state.common,
  student: state.student,
});

SideMenu = withRouter(SideMenu);
export default connect(mapStateToProps, {
  updatePageName,
  reinitializeStudent,
})(SideMenu);
