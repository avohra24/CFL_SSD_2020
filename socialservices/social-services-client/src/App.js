import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import Student from "./components/student/Student";
import HeaderSideMenu from "./Layout/HeaderSideMenu";
import Dashboard from "./components/Dashboard";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderSideMenuVisible: true,
    };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      isHeaderSideMenuVisible: !this.state.isHeaderSideMenuVisible,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {this.state.isHeaderSideMenuVisible ? <HeaderSideMenu /> : null}
            <Switch>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/signin" component={SignIn}></Route>
              <Route exact path="/student" component={Student}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route
                exact
                path="/"
                render={(state) => <SignIn handler={this.handler} />}
              ></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// <SignUp handler={this.handler}></SignUp>/SignUp>
