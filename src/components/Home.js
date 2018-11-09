import React, { Component } from "react";
import { Redirect } from "react-router";

var loggedIn = sessionStorage.getItem("logged");

class Home extends Component {

  render() {
    if (loggedIn) {
      return(<Redirect to="/datosgenerales" />);
    } else {
      return(<Redirect to="/login" />);
    }
  }
}

export default Home;
