import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import axios from "axios";
import config from "../config.json";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

var loggedIn = sessionStorage.getItem("logged");

const divstyle = {
  marginTop: "150px"
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      clave: "",
      message: "",
      type: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleClick(event) {
    var apiBaseUrl = config.apiHost + "users/";
    var self = this;
    var payload = {
      usuario: this.state.usuario,
      clave: this.state.clave
    };
    var info;
    // console.log(payload);

    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        // console.log(response);
        switch (response.data.code) {
          case 200:
            info = {
              message: "inicio correcto.",
              type: "alert alert-success text-center"
            };
            self.setState(info);
            sessionStorage.setItem("logged", true);
            window.location.reload();
            break;
          case 204:
            info = {
              message: "El usuario y/o contrasena son incorrectos.",
              type: "alert alert-danger text-center"
            };
            self.setState(info);
            sessionStorage.setItem("logged", false);
            break;
          case 205:
            info = {
              message: "El usuario y/o contrasena son incorrectos.",
              type: "alert alert-danger text-center"
            };
            self.setState(info);
            sessionStorage.setItem("logged", false);
            break;
          default:
            info = {
              message: "hubo un error en la consulta",
              type: "alert alert-danger text-center"
            };
            self.setState(info);
            sessionStorage.setItem("logged", false);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;

    if (!loggedIn) {
      return (
        <Grid style={divstyle}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid item xs={12}>
                  <br />
                  <img
                    src="/images/logo_pdn.png"
                    className="img-fluid"
                    alt="PDN"
                  />
                  <div id="messages" className={this.state.type}>
                    {this.state.message}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Usuario"
                    className={classes.textField}
                    value={this.state.usuario}
                    onChange={this.handleChange("usuario")}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-name"
                    label="Contraseña"
                    className={classes.textField}
                    value={this.state.clave}
                    onChange={this.handleChange("clave")}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className="text-center">
                    <Button onClick={event => this.handleClick(event)}>
                      Ingresar
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withStyles(styles)(Login);
