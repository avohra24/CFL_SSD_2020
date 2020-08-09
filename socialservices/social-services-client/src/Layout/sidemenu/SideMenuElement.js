import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import "../../style/Dashboard.css";

export default class SideMenuElement extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    this.props.onSelect(key);
  }

  render() {
    return (
      <Nav
        className="sm-element"
        onClick={() => this.handleClick(this.props.component)}
      >
        <div className="sm-cont-icon">
          <i
            className={"sm-icon fa " + this.props.componentIcon}
            aria-hidden="true"
          ></i>
        </div>
        <div className="sm-element-name">{this.props.componentName}</div>
      </Nav>
    );
  }
}
