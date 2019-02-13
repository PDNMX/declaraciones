import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField/TextField";

import Direccion from "./Direccion";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    width: "90%"
  }
});

class GuttersGrid extends React.Component {
  render() {
    const {
      classes,
      data,
      tipo,
      handleChange,
      catalogos,
      handleDireccion
    } = this.props;

    return (
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            <br />
            Datos del {tipo}
            <hr />
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Nombre o razón social"
            className={classes.textField}
            value={data.nombre}
            onChange={handleChange(tipo + ".nombre")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="RFC"
            className={classes.textField}
            value={data.rfc}
            onChange={handleChange(tipo + ".rfc")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="CURP"
            className={classes.textField}
            value={data.curp}
            onChange={handleChange(tipo + ".curp")}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Fecha de constitución"
            className={classes.textField}
            value={data.fecha_constitucion}
            onChange={handleChange(tipo + ".fecha_constitucion")}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12}>
          <Direccion
            data={data.domicilio}
            ciudades={catalogos.ciudades}
            entidades={catalogos.entidades}
            municipios={catalogos.municipios}
            localidades={catalogos.localidades}
            tipovialidad={catalogos.tipovialidad}
            handleChange={handleDireccion}
          />
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
