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
import Mensaje from "./Mensaje";

// console.log(process.env.API);

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
    // width: 200,
    width: "100%"
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

var loggedIn = sessionStorage.getItem("logged");

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      clave: "",
      mensaje: "",
      type: "",
      mensaje: []
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
    var mensaje;

    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        switch (response.data.code) {
          case 200:
            mensaje = {
              mensaje: "inicio correcto.",
              type: "alert alert-success text-center"
            };
            self.setState(mensaje:mensaje);
            sessionStorage.setItem("logged", true);
            window.location.reload();
            break;
          case 204:
            mensaje = {
              mensaje: "El usuario y/o contrasena son incorrectos.",
              type: "alert alert-danger text-center"
            };
            self.setState(mensaje:mensaje);
            sessionStorage.setItem("logged", false);
            break;
          case 205:
            mensaje = {
              mensaje: "El usuario y/o contrasena son incorrectos.",
              type: "alert alert-danger text-center"
            };
            self.setState(mensaje:mensaje);
            sessionStorage.setItem("logged", false);
            break;
          default:
            mensaje = {
              mensaje: "hubo un error en la consulta",
              type: "alert alert-danger text-center"
            };
            self.setState(mensaje:mensaje);
            sessionStorage.setItem("logged", false);
        }
        console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props; 
    if (!loggedIn) {
      return (
        <Grid style={divstyle} container spacing={24}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: "center" }}>
                <form autoComplete="off">
                  <Grid item xs={12}>
                    <br />
                    <img
                      src="./images/logo_pdn.png"
                      className="img-fluid"
                      alt="PDN"
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "10px" }}>
                    {this.state.mensaje.mensaje && (
                      <Mensaje mensaje={this.state.mensaje} />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="usuario"
                      label="Usuario"
                      className={classes.textField}
                      value={this.state.usuario}
                      onChange={this.handleChange("usuario")}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="clave"
                      label="Contraseña"
                      type="password"
                      className={classes.textField}
                      value={this.state.clave}
                      onChange={this.handleChange("clave")}
                      margin="normal"
                    />
                  </Grid>
                </form>
                <Grid item xs={12}>
                  <br />
                  <div>
                    <Button
                      variant="contained"
                      onClick={event => this.handleClick(event)}
                    >
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
      return <Redirect to="/datosgenerales" />;
    }
  }
}

export default withStyles(styles)(Login);
