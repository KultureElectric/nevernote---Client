import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route component={Header} />
          <Route
            exact
            path="/"
            component={() =>
              this.props.auth ? <Redirect to="/dashboard" /> : <Landing />
            }
          />
          <Route
            path="/dashboard"
            component={() =>
              !this.props.auth ? <Redirect to="/" /> : <Dashboard />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(App);
