import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaExperienciaLaboral";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
import Checkbox from "@material-ui/core/Checkbox";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Direccion from "./Direccion";

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
  const {
    classes,
    data,
    handleChange,
    addClick,
    removeClick
  } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Experiencia Laboral
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel>Ambito</InputLabel>
              <Select
                value={data.datos_experiencia_laboral.ambito.codigo}
                onChange={handleChange("datos_experiencia_laboral.ambito")}
              >
                {data.ambitos.map(ambito => (
                  <MenuItem key={ambito.codigo} value={ambito.codigo}>
                    {ambito.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel>Nivel de Gobierno</InputLabel>
              <Select
                value={data.datos_experiencia_laboral.nivel_gobierno.codigo}
                onChange={handleChange(
                  "datos_experiencia_laboral.nivel_gobierno"
                )}
              >
                {data.nivelGobierno.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
                ,
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel>Poder Juridico</InputLabel>
              <Select
                value={data.datos_experiencia_laboral.poder_ente.codigo}
                onChange={handleChange("datos_experiencia_laboral.poder_ente")}
              >
                {data.poderEjecutivo.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Nombre de la Institución"
              className={classes.textField}
              value={data.datos_experiencia_laboral.nombre_institucion}
              onChange={handleChange(
                "datos_experiencia_laboral.nombre_institucion"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Unidad administrativa"
              className={classes.textField}
              value={data.datos_experiencia_laboral.unidad_administrativa}
              onChange={handleChange(
                "datos_experiencia_laboral.unidad_administrativa"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel>Sector/Industria</InputLabel>
              <Select
                value={data.datos_experiencia_laboral.sector_industria.codigo}
                onChange={handleChange(
                  "datos_experiencia_laboral.sector_industria"
                )}
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
            <TextField
              label="Jerarquia"
              className={classes.textField}
              value={data.datos_experiencia_laboral.jerarquia_rango}
              onChange={handleChange(
                "datos_experiencia_laboral.jerarquia_rango"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Cargo/Puesto"
              className={classes.textField}
              value={data.datos_experiencia_laboral.cargo_puesto}
              onChange={handleChange("datos_experiencia_laboral.cargo_puesto")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Fecha de ingreso"
              className={classes.textField}
              value={data.datos_experiencia_laboral.fecha_ingreso}
              onChange={handleChange("datos_experiencia_laboral.fecha_ingreso")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Fecha de salida"
              className={classes.textField}
              value={data.datos_experiencia_laboral.fecha_salida}
              onChange={handleChange("datos_experiencia_laboral.fecha_salida")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.contratado_honorarios}
                  value="contratado_honorarios"
                  color="primary"
                />
              }
              label="Funciones*******************************************************"
            />
          </Grid>
          <Grid item xs={12}>
            <Direccion
              data={data.datos_experiencia_laboral.direccion}
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
          <Tabla data={data.experiencia_laboral} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
