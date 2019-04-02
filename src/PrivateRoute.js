import React from "react";
import { Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

import app from "./components/Firebase";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

export default function PrivateRoute({ component: Component, ...rest }) {
  let user = app.auth().currentUser;

  return (
    <Route
      {...rest}
      render={props => {
        return user ? (
          <div className={styles.root}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <AppBar />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                {props.match.path === "/" && (
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Component {...props} {...rest} />
                    </Grid>
                  </Grid>
                )}
                {props.match.path !== "/" && (
                  <Grid container spacing={0}>
                    <Grid item xs={2}>
                      <Menu {...props} />
                    </Grid>
                    <Grid item xs={10}>
                      <Component {...props} {...rest} />
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </div>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );

  // app.auth().onAuthStateChanged(user => {
  //   console.log("PrivateRoute", user);
  //   if (user) {
  //     return (
  //       <Route
  //         {...rest}
  //         render={props => {
  //           return (
  //
  //           );
  //         }}
  //       />
  //     );
  //   } else {
  //     return (
  //       <Route
  //         {...rest}
  //         render={props => {
  //           return ;
  //         }}
  //       />
  //     );
  //   }
  // });
}
