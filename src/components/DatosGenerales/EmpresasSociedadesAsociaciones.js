import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaEmpresasSociedadesAsociaciones";

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
import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

// data picker
// import moment from "moment";

// import Direccion from "./Direccion";

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
          Empresas, sociedades o asociaciónes
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre de la empresa, sociedad o asociación"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.nombre_empresa_sociedad_asociacion}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="pais">País</InputLabel>
              <Select
                value={data.datos_empresas_sociedades_asociaciones.pais_registro.codigo}
                onChange={handleChange("pais")}
                inputProps={{
                  name: "pais",
                  id: "pais"
                }}
              >
                {data.ciudades.map(ciudad => (
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
              label="Fecha de constitución"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.fecha_constitucion}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Numero de registro"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.numero_registro}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.rfc}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Rol en la empresa, sociedad o asociación"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.rol}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_empresas_sociedades_asociaciones.actividad_economica}
                  value="Habita el domicilio del declarante"
                  color="primary"
                />
              }
              label="¿Tiene actividad económica?"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_empresas_sociedades_asociaciones.sector_industria.codigo}
                onChange={handleChange("datos_encargo_actual.sector_industria")}
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
              label="Porcentaje de participación"
              className={classes.textField}
              value={data.datos_empresas_sociedades_asociaciones.porcentaje_participacion}
              margin="normal"
            />
          </Grid>

          {
            /*
            <Grid item xs={12}>
              <Direccion
                data={data.empresas_sociedades_asociaciones.domicilio}
                ciudades={data.ciudades}
                entidades={data.entidades}
                municipios={data.municipios}
                localidades={data.localidades}
                tipovialidad={data.tipovialidad}
                handleChange={handleChange}
              />
            </Grid>
            */
          }

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
            data={data.empresas_sociedades_asociaciones}
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
