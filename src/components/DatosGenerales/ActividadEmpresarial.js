import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaActividadEmpresarial";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

// /*Multiselect*/
// import Input from "@material-ui/core/Input";
// import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
// /*Multiselect*/
//
// import FormControlLabel from "@material-ui/core/FormControlLabel";
//
// // data picker
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
          Actividad empresarial
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, denominación o razón social"
              className={classes.textField}
              value={data.datos_actividad_empresarial.nombre_denominacion_razon_social}
              onChange={handleChange("nombre_denominacion_razon_social")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_actividad_empresarial.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP"
              className={classes.textField}
              value={data.datos_actividad_empresarial.curp}
              onChange={handleChange("curp")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_actividad_empresarial.sector_industria.codigo}
                onChange={handleChange("sector_industria")}
                inputProps={{
                  name: "sector_industria",
                  id: "sector_industria"
                }}
              >
                {data.sectorIndustria.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_actividad">
                Tipo de actividad
              </InputLabel>
              <Select
                value={data.datos_actividad_empresarial.tipo_actividad_servicio.codigo}
                onChange={handleChange("tipo_actividad_servicio")}
                inputProps={{
                  name: "tipo_actividad",
                  id: "tipo_actividad"
                }}
              >
                {data.catTiposActividades.map(tipoActividad => (
                  <MenuItem
                    key={tipoActividad.codigo}
                    value={tipoActividad.codigo}
                  >
                    {tipoActividad.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Descripción de la actividad"
              className={classes.textField}
              value={data.datos_actividad_empresarial.descripcion_actividad_servicio}
              onChange={handleChange("descripcion_actividad_servicio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ingreso bruto anual recibido por el encargo público"
              className={classes.textField}
              value={data.datos_actividad_empresarial.ingreso_bruto_anual.valor}
              onChange={handleChange("ingreso_bruto_anual")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_actividad_empresarial.ingreso_bruto_anual.moneda
                    .codigo
                }
                onChange={handleChange("ingreso_bruto_anual.moneda")}
                inputProps={{
                  name: "moneda",
                  id: "moneda"
                }}
              >
                {data.catTiposMonedas.map(tipoMoneda => (
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
                value={data.datos_actividad_empresarial.ingreso_bruto_anual.unidad_temporal.codigo}
                onChange={handleChange("ingreso_bruto_anual.unidad_temporal")}
                inputProps={{
                  name: "frecuencia",
                  id: "frecuencia"
                }}
              >
                {data.catMedidasPlazos.map(medidaPlazo => (
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
              value={data.datos_actividad_empresarial.ingreso_bruto_anual.duracion_frecuencia}
              onChange={handleChange("ingreso_bruto_anual.duracion_frecuencia")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de pago"
              className={classes.textField}
              value={data.datos_actividad_empresarial.ingreso_bruto_anual.fecha_transaccion}
              onChange={handleChange("ingreso_bruto_anual.fecha_transaccion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_actividad_empresarial.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={data.datos_actividad_empresarial.domicilio_actividad_empresarial}
              ciudades={data.ciudades}
              entidades={data.entidades}
              municipios={data.municipios}
              localidades={data.localidades}
              tipovialidad={data.tipovialidad}
              handleChange={handleChange}
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
          <Tabla data={data.actividad_empresarial} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
