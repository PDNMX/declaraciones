import React from "react";
import { withStyles } from "@material-ui/core/styles";

// import axios from "axios";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Mensaje from "../Mensaje/";

import app from "../Firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "150px"
  },
  firstItem: {
    maxWidth: 500
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 200,
    width: "90%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  card: {
    minWidth: 275,
    background: "#F5F5F5"
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    console.log("Login",this.props);

    let unsuscribe = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }

      unsuscribe();
    });

    this.state = {
      // email: "",
      // clave: "",
      email: "benito.perdomo.pdn@gmail.com",
      clave: "Raziel-87",
      mensaje: "",
      type: ""
      // autenticated: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleClick = event => {
    // let apiBaseUrl = process.env.REACT_APP_API + "users/";

    event.preventDefault();

    let mensaje;
    let self = this;

    app
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.clave)
      .then(res => {
        if (!res.user.emailVerified) {
          mensaje = {
            mensaje:
              "Su cuenta no ha sido verificada, por favor revise en su correo electronico y siga las instrucciones.",
            type: "info"
          };

          self.setState({ mensaje: mensaje, autenticated: false }, () => {
            res.user.sendEmailVerification().catch(function(err) {
              console.log("Error: ", err);
            });
          });
        } else {
          self.props.history.push("/");
          // this.setState({ autenticated: true });
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        let message = "";

        console.log(errorCode, errorMessage);

        switch (errorCode) {
          case "auth/invalid-email":
            message = "El correo electrónico es incorrecto.";
            break;
          case "auth/user-disabled":
            message = "su cuenta fue desactivada.";
            break;
          case "auth/user-not-found":
            message = "No existe una cuenta con ese correo electrónico.";
            break;
          case "auth/wrong-password":
            message =
              "Contraseña incorrecta o la cuenta de usuario no cuenta con una";
            break;
          default:
            message = "error desconocido: " + errorMessage;
        }

        mensaje = {
          mensaje: message,
          type: "danger"
        };
        self.setState({ mensaje: mensaje, autenticated: false });
      });
  };

  render() {
    const { classes } = this.props;
    const { email, clave } = this.state;
    const disabledButton = email === "" || clave === "";

    // return this.state.autenticated ? (
    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} className={classes.firstItem}>
            <Card className={classes.card}>
              <CardContent style={{ textAlign: "center" }}>
                <form autoComplete="off">
                  <Grid item xs={12}>
                    <br />
                    <img
                      src="./images/PDN.png"
                      className="img-fluid"
                      alt="PDN"
                      style={{
                        maxWidth: 150
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "10px" }}>
                    {this.state.mensaje.mensaje && (
                      <Mensaje mensaje={this.state.mensaje} />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      label="Correo electrónico"
                      className={classes.textField}
                      value={this.state.email}
                      onChange={this.handleChange("email")}
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
                      disabled={disabledButton}
                      onClick={this.handleClick}
                    >
                      Ingresar
                    </Button>
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
