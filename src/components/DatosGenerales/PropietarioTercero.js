import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaPropietarioTercero";

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
          Uso o beneficios en especie propiedad de un tercero
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Tipo de bien o servicio"
              className={classes.textField}
              value={data.datos_uso_especie_propiedad_tercero.tipo_bien}
              onChange={handleChange("tipo_bien")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Valor de mercado aproximado"
              className={classes.textField}
              value={
                data.datos_uso_especie_propiedad_tercero.valor_mercado.valor
              }
              onChange={handleChange("valor_mercado")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_uso_especie_propiedad_tercero.valor_mercado.moneda
                    .codigo
                }
                onChange={handleChange("valor_mercado.moneda")}
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
              label="Nombre, denominación o razón social"
              className={classes.textField}
              value={
                data.datos_uso_especie_propiedad_tercero
                  .nombre_tercero_propietario
              }
              onChange={handleChange("nombre_tercero_propietario")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC del tercero propietario"
              className={classes.textField}
              value={
                data.datos_uso_especie_propiedad_tercero.rfc_tercero_propietario
              }
              onChange={handleChange("rfc_tercero_propietario")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP del tercero propietario"
              className={classes.textField}
              value={
                data.datos_uso_especie_propiedad_tercero
                  .curp_tercero_propietario
              }
              onChange={handleChange("curp_tercero_propietario")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="relacion">Relación</InputLabel>
              <Select
                value={
                  data.datos_uso_especie_propiedad_tercero.relacion_persona
                    .codigo
                }
                onChange={handleChange("relacion_persona")}
                inputProps={{
                  name: "relacion",
                  id: "relacion"
                }}
              >
                {data.catRelacionDeclarante.map(relacionDeclarante => (
                  <MenuItem
                    key={relacionDeclarante.codigo}
                    value={relacionDeclarante.codigo}
                  >
                    {relacionDeclarante.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={
                  data.datos_uso_especie_propiedad_tercero.sector_industria
                    .codigo
                }
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

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de inicio"
              className={classes.textField}
              value={data.datos_uso_especie_propiedad_tercero.fecha_inicio}
              onChange={handleChange("fecha_inicio")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_uso_especie_propiedad_tercero.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={data.datos_uso_especie_propiedad_tercero.domicilio_persona}
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
          <Tabla
            data={data.uso_especie_propiedad_tercero}
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
