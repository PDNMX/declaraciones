import React, { Component } from "react";
import routes from "./routes/";
import declaraciones from "./routes/declaraciones";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import P404 from "./components/P404";
import PrivateRoute from "./PrivateRoute";

const p404 = () => {
  return <P404 />;
};

const getRoute = (prop, parent) => {
  let path = typeof parent === "undefined" ? "" : parent;
  // console.log("path", path+prop.path);

  if (prop.private) {
    return (
      <PrivateRoute
        exact
        path={path + prop.path}
        component={prop.component}
        key={prop.key}
      />
    );
  } else {
    return (
      <Route
        exact
        path={path + prop.path}
        component={prop.component}
        key={prop.key}
      />
    );
  }
};

class App extends Component {
  render() {
    const rutas = [...routes, ...declaraciones];

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {rutas.map(prop => {
            let rutas = [];
            if (typeof prop.childs !== "undefined") {
              rutas = prop.childs.map(child => {
                return getRoute(child, prop.path);
              });
              // console.log(rutas);
            }
            return [...rutas, ...[getRoute(prop)]];
          })}
          <Route render={p404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
