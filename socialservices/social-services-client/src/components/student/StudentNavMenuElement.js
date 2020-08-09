import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { FA_RIGHT } from "../../constants/fa-icons";
import "../../style/Student.css";

export default class StudentNavMenuElement extends Component {
  render() {
    return (
      <Nav.Item className="snm-element" as="li">
        <Nav.Link eventKey={this.props.iden} className="snm-element-link">
          <div className="snm-cont-icon">
            <i
              className={"snm-icon fa " + this.props.componentIcon}
              aria-hidden="true"
            ></i>
          </div>
          <div className="snm-element-name">{this.props.componentName}</div>
          <i
            className={"snm-active-arrow fa fa-2x " + FA_RIGHT}
            aria-hidden="true"
          ></i>
        </Nav.Link>
      </Nav.Item>
    );
  }
}
