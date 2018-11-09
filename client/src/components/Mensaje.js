import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  danger: {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "15px",
    color: "#a94442",
    backgroundColor: "#f2dede",
    borderColor: "#ebccd1"
  },
  success: {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "15px",
    color: "#3c763d",
    backgroundColor: "#dff0d8",
    borderColor: "#d6e9c6"
  },
  info: {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "15px",
    color: "#31708f",
    backgroundColor: "#d9edf7",
    borderColor: "#bce8f1"
  },
  warning: {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "15px",
    color: "#8a6d3b",
    backgroundColor: "#fcf8e3",
    borderColor: "#faebcc"
  },
  default: {
    textAlign: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    margin: "0 auto",
    padding: "15px",
  }
});

class Mensaje extends React.Component {
  render() {
    let { mensaje, classes } = this.props;

    switch (mensaje.type) {
      case "danger":
        return <div className={classes.danger}>{mensaje.mensaje}</div>;
        break;
      case "success":
        return (
          <div>
            <Paper>
              <Typography variant={"title"} className={classes.success}>
                {mensaje.mensaje}
              </Typography>
            </Paper>
          </div>
        );
        break;
      case "info":
        return (
          <div>
            <Paper>
              <Typography variant={"title"} className={classes.info}>
                {mensaje.mensaje}
              </Typography>
            </Paper>
          </div>
        );
        break;
      case "warning":
        return (
          <div>
            <Paper>
              <Typography variant={"title"} className={classes.warning}>
                {mensaje.mensaje}
              </Typography>
            </Paper>
          </div>
        );
        break;
      default:
        return (
          <div>
            <Paper>
              <Typography variant={"title"} className={classes.default}>
                type no especificado!!!
              </Typography>
            </Paper>
          </div>
        );
    }
  }
}

export default withStyles(styles)(Mensaje);
