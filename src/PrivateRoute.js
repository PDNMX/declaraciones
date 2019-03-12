import React from "react";
import { Route, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import AppBar from "./components/AppBar";
import Menu from "./components/Menu";

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
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("authenticated") === "true" ? (
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
        )
      }
    />
  );
}
