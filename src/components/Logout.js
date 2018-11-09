import React, { Component } from "react";
import { Redirect } from "react-router";

sessionStorage.setItem("logged", false);
// sessionStorage.clear();

class Logout extends Component {
  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;
