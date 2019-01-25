import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaFideicomisos";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
// import Input from "@material-ui/core/Input";
// import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

// import FormControlLabel from "@material-ui/core/FormControlLabel";

// data picker
// import moment from "moment";

const styles = theme => ({
  card: {
    minWidth: 275,
    marginTop: 10
  },
  title: {
    fontSize: 18
  },
  textField: {
    width: "100%"
  },
  select: {
    //minWidth: 335,
    marginTop: 15,
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: 25
  },
  input: {
    display: "none"
  }
});

function SimpleCard(props) {
  const { classes, data, handleChange, addClick, removeClick } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Fideicomisos
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={data.datos_fideicomisos.tipo_operacion.codigo}
                onChange={handleChange("tipo_operacion")}
                inputProps={{
                  name: "tipo_operacion",
                  id: "tipo_operacion"
                }}
              >
                {data.catTipoOperacion.map(tipoOperacion => (
                  <MenuItem
                    key={tipoOperacion.codigo}
                    value={tipoOperacion.codigo}
                  >
                    {tipoOperacion.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre o identificador del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.identificador_fideicomiso}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_fideicomiso">
                Tipo de fideicomiso
              </InputLabel>
              <Select
                value={data.datos_fideicomisos.tipo_fideicomiso.codigo}
                onChange={handleChange("tipo_fideicomiso")}
                inputProps={{
                  name: "tipo_fideicomiso",
                  id: "tipo_fideicomiso"
                }}
              >
                {data.catTiposFideicomisos.map(tipoFideicomiso => (
                  <MenuItem
                    key={tipoFideicomiso.codigo}
                    value={tipoFideicomiso.codigo}
                  >
                    {tipoFideicomiso.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Objetivo del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.objetivo}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de registro o identificador"
              className={classes.textField}
              value={data.datos_fideicomisos.numero_registro}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de creación del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.fecha_creacion}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Vigencia del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.vigencia}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Residencia del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.residencia.codigo}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Valor del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.valor}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Moneda del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.moneda.codigo}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje propiedad/Derechos fiduciarios"
              className={classes.textField}
              value={data.datos_fideicomisos.porcentaje_propiedad_derechos_fiduciarios}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ingreso monetario que obtiene del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.ingreso_monetario_obtenido}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Institución fiduciaria"
              className={classes.textField}
              value={data.datos_fideicomisos.institucion_fiduciaria}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, denominación o razón social del fideicomitente, fideicomisario, fiduciario"
              className={classes.textField}
              value={data.datos_fideicomisos.fideicomitente.nombre}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC del fideicomitente, fideicomisario, fiduciario"
              className={classes.textField}
              value={data.datos_fideicomisos.fideicomitente.rfc}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP del fideicomitente, fideicomisario, fiduciario"
              className={classes.textField}
              value={data.datos_fideicomisos.fideicomitente.curp}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de nacimiento o de constitución del fideicomitente, fideicomisario, fiduciario"
              className={classes.textField}
              value={data.datos_fideicomisos.fideicomitente.fecha_constitucion}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_fideicomisos.observaciones}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={addClick()}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Tabla data={data.fideicomisos} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
