import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

import app from "./Firebase";

const styles = {
  root: {
    flexGrow: 1,    
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleClick = event => {
    event.preventDefault();
    app
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.clear();
        sessionStorage.setItem("authenticated", false);
        this.setState({
          redirect: true
        });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.state.redirect && <Redirect to="/" />}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Declaracion
              </Typography>
              {sessionStorage.getItem("authenticated") === "true" && (
                <Button color="inherit" onClick={this.handleClick}>
                  Logout
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);
