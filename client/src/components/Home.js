import React, { Component } from "react";
import { Route, Redirect } from "react-router";

var loggedIn = sessionStorage.getItem("logged");

class Home extends Component {
  render() {
    return (
      <Route
        exact="exact"
        path="/"
        render={() =>
          loggedIn ? (
            <Redirect to="/datosgenerales" />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default Home;
