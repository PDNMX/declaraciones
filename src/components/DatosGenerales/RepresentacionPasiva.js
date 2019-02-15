import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaRepresentacionPasiva";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

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

// estilos para los select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function SimpleCard(props) {
  const { classes, data, handleChange, addClick, removeClick } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Representación pasiva
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_representacion">
                Tipo de representación
              </InputLabel>
              <Select
                value={
                  data.datos_representacion_pasiva.tipo_representacion.codigo
                }
                onChange={handleChange("tipo_representacion")}
                inputProps={{
                  name: "tipo_representacion",
                  id: "tipo_representacion"
                }}
              >
                {data.catTiposRepresentaciones.map(tipoRepresentacion => (
                  <MenuItem
                    key={tipoRepresentacion.codigo}
                    value={tipoRepresentacion.codigo}
                  >
                    {tipoRepresentacion.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre completo"
              className={classes.textField}
              value={data.datos_representacion_pasiva.nombre}
              onChange={handleChange("nombre")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de inicio"
              className={classes.textField}
              value={
                data.datos_representacion_pasiva.fecha_inicio_representacion
              }
              onChange={handleChange("fecha_inicio_representacion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Nacionalidades
              </InputLabel>
              <Select
                multiple
                value={data.datos_representacion_pasiva.nacionalidades}
                onChange={handleChange("nacionalidades")}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {data.ciudades.map(ciudad => (
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                    <Checkbox
                      checked={data.nacionalidad.indexOf(ciudad.codigo) > -1}
                    />
                    <ListItemText primary={ciudad.valor} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP"
              className={classes.textField}
              value={data.datos_representacion_pasiva.curp}
              onChange={handleChange("curp")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_representacion_pasiva.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de nacimiento"
              className={classes.textField}
              value={data.datos_representacion_pasiva.fecha_nacimiento}
              onChange={handleChange("fecha_nacimiento")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ocupación/Profesión"
              className={classes.textField}
              value={data.datos_representacion_pasiva.ocupacion_profesion}
              onChange={handleChange("ocupacion_profesion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_representacion_pasiva.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_representacion_pasiva.sector_industria.codigo}
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
          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_representacion_pasiva.tiene_intereses}
                  value="Habita el domicilio del declarante"
                  onChange={handleChange("tiene_intereses")}
                  color="primary"
                />
              }
              label="¿Tiene el representante intereses en el mismo sector/industria al que pertenece el empleo oficial del Declarante?"
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
          <Tabla data={data.representacion_pasiva} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
