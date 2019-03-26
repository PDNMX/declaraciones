import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaFideicomisos";
import Partes from "./FideicomisoPartes";

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
    width: "90%"
  },
  select: {
    //minWidth: 335,
    marginTop: 15,
    width: "90%"
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
  const {
    classes,
    data,
    handleChange,
    addClick,
    removeClick,
    setDataDireccionFideicomitente,
    setDataDireccionFideicomisario,
    setDataDireccionFiduciario
  } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Fideicomisos
        </Typography>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={3}>
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
              onChange={handleChange("identificador_fideicomiso")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
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
              onChange={handleChange("objetivo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de registro o identificador"
              className={classes.textField}
              value={data.datos_fideicomisos.numero_registro}
              onChange={handleChange("numero_registro")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de creación del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.fecha_creacion}
              onChange={handleChange("fecha_creacion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Vigencia del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.vigencia}
              onChange={handleChange("vigencia")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="residencia">
                Residencia del fideicomiso
              </InputLabel>
              <Select
                value={data.datos_fideicomisos.residencia.codigo}
                onChange={handleChange("residencia")}
                inputProps={{
                  name: "residencia",
                  id: "residencia"
                }}
              >
                {data.catPaises.map(ciudad => (
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                    {ciudad.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Valor del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.valor}
              onChange={handleChange("valor")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda del fideicomiso</InputLabel>
              <Select
                value={data.datos_fideicomisos.moneda.codigo}
                onChange={handleChange("moneda")}
                inputProps={{
                  name: "moneda",
                  id: "moneda"
                }}
              >
                {data.catTiposMonedas.map(tipoMoneda => (
                  <MenuItem
                    key={tipoMoneda.codigoNumerico + tipoMoneda.entidad}
                    value={tipoMoneda.codigo}
                  >
                    {tipoMoneda.moneda}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje propiedad/Derechos fiduciarios"
              className={classes.textField}
              value={
                data.datos_fideicomisos
                  .porcentaje_propiedad_derechos_fiduciarios
              }
              onChange={handleChange(
                "porcentaje_propiedad_derechos_fiduciarios"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ingreso monetario que obtiene del fideicomiso"
              className={classes.textField}
              value={data.datos_fideicomisos.ingreso_monetario_obtenido}
              onChange={handleChange("ingreso_monetario_obtenido")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Institución fiduciaria"
              className={classes.textField}
              value={data.datos_fideicomisos.institucion_fiduciaria}
              onChange={handleChange("institucion_fiduciaria")}
              margin="normal"
            />
          </Grid>

          <Partes
            data={data.datos_fideicomisos.fideicomitente}
            catalogos={data}
            tipo={"fideicomitente"}
            handleChange={handleChange}
            handleDireccion={setDataDireccionFideicomitente}
          />

          <Partes
            data={data.datos_fideicomisos.fideicomisario}
            catalogos={data}
            tipo={"fideicomisario"}
            handleChange={handleChange}
            handleDireccion={setDataDireccionFideicomisario}
          />

          <Partes
            data={data.datos_fideicomisos.fiduciario}
            catalogos={data}
            tipo={"fiduciario"}
            handleChange={handleChange}
            handleDireccion={setDataDireccionFiduciario}
          />

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_fideicomisos.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={3}>
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
        <Grid container className={classes.root} spacing={0}>
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
