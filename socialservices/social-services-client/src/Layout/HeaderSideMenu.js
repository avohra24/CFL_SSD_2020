import React, { Component } from "react";
import Header from "./Header";
import SideMenu from "./sidemenu/SideMenu";
import ActionBar from "./ActionBar";

export default class HeaderSideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isSideMenuVisible: false, pageTitle: "Dashboard" };
    this.sideMenuToggle = this.sideMenuToggle.bind(this);
    this.sideMenuSelect = this.sideMenuSelect.bind(this);
  }

  sideMenuSelect(tile) {
    this.setState({ isSideMenuVisible: false });
  }

  sideMenuToggle() {
    this.setState({ isSideMenuVisible: !this.state.isSideMenuVisible });
  }

  render() {
    return (
      <div className="header-side-menu">
        <Header onToggleSideMenu={this.sideMenuToggle}></Header>
        <ActionBar pageTitle={this.state.pageTitle}></ActionBar>
        {this.state.isSideMenuVisible ? (
          <SideMenu onSideMenuSelect={this.sideMenuSelect} />
        ) : null}
      </div>
    );
  }
}
