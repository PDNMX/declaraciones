import React, { Component } from "react";
import routes from "./routes/";
import declaraciones from "./routes/declaraciones";
import Login from "./components/Login/";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import P404 from "./components/P404";
import PrivateRoute from "./PrivateRoute";

import app from "./components/Firebase";

const p404 = () => {
  return <P404 />;
};

const getRoute = (prop, parent) => {
  let path = typeof parent === "undefined" ? "" : parent;

  // console.log("autenticated", autenticated);
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
  constructor(props) {
    super(props);

    let rutas = [...routes, ...declaraciones];
    let lista = [];
    for (var i = 0; i < rutas.length; i++) {
      let ruta = rutas[i];
      lista.push(ruta);

      if (ruta.childs) {
        for (var x = 0; x < ruta.childs.length; x++) {
          let child = ruta.childs[x];
          child.path = ruta.path + child.path;
          lista.push(child);
        }
      }
    }

    this.state = {
      lista: lista
    };
  }

  componentWillMount() {
    let self = this;
    let unsuscribe = app.auth().onAuthStateChanged(user => {
      let autenticated = user ? true : false;
      // self.setState({ autenticated: autenticated }, () => {
      //   console.log("will", this.state);
      // });

      unsuscribe();
    });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {this.state.lista.map(prop => {
            return prop.private ? (
              <PrivateRoute
                exact
                path={prop.path}
                component={prop.component}
                key={prop.key}
              />
            ) : (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={prop.key}
              />
            );
          })}
          <Route exact path="/login" component={Login} key={1} />
          <Route render={p404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
