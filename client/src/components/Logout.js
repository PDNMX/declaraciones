import React, { Component } from "react";
import { Redirect } from "react-router";

sessionStorage.clear();

class Home extends Component {
  render() {
    return <Redirect to="/" />;
  }
}

export default Home;
