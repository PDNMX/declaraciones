import React, { Component } from "react";
import routes from "./routes/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import P404 from "./components/P404";

const p404 = () => {
  return <P404 />;
};

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          <Route render={p404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
