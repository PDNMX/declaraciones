import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaSalariosPublicos";

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
          Sueldos y salarios públicos
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="ente_publico">Ente Público</InputLabel>
              <Select
                value={data.datos_sueldos_salarios_publicos.ente_publico.valor}
                onChange={handleChange("ente_publico")}
                inputProps={{
                  name: "ente_publico",
                  id: "ente_publico"
                }}
              >
                {data.catDependencia.map(entesPublicos => (
                  <MenuItem
                    key={entesPublicos.valor}
                    value={entesPublicos.valor}
                  >
                    {entesPublicos.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_sueldos_salarios_publicos.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ingreso bruto anual recibido por el encargo público"
              className={classes.textField}
              value={
                data.datos_sueldos_salarios_publicos.ingreso_bruto_anual.valor
              }
              onChange={handleChange("ingreso_bruto_anual.valor")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_sueldos_salarios_publicos.ingreso_bruto_anual
                    .moneda.codigo
                }
                onChange={handleChange("ingreso_bruto_anual.moneda")}
                inputProps={{
                  name: "moneda",
                  id: "moneda"
                }}
              >
                {data.catTipoMoneda.map(tipoMoneda => (
                  <MenuItem key={tipoMoneda.codigoNumerico+tipoMoneda.entidad} value={tipoMoneda.codigo}>
                    {tipoMoneda.moneda}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="frecuencia">Frecuencia</InputLabel>
              <Select
                value={
                  data.datos_sueldos_salarios_publicos.ingreso_bruto_anual
                    .unidad_temporal.codigo
                }
                onChange={handleChange(
                  "ingreso_bruto_anual.unidad_temporal"
                )}
                inputProps={{
                  name: "frecuencia",
                  id: "frecuencia"
                }}
              >
                {data.catMedidaPlazo.map(medidaPlazo => (
                  <MenuItem key={medidaPlazo.codigo} value={medidaPlazo.codigo}>
                    {medidaPlazo.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Duración"
              className={classes.textField}
              value={
                data.datos_sueldos_salarios_publicos.ingreso_bruto_anual
                  .duracion_frecuencia
              }
              onChange={handleChange("ingreso_bruto_anual.duracion_frecuencia")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de pago"
              className={classes.textField}
              value={
                data.datos_sueldos_salarios_publicos.ingreso_bruto_anual
                  .fecha_transaccion
              }
              onChange={handleChange("ingreso_bruto_anual.fecha_transaccion")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_sueldos_salarios_publicos.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={addClick}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Tabla
            data={data.sueldos_salarios_publicos}
            buttonClick={removeClick}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
