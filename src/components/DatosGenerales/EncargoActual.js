import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

import Checkbox from "@material-ui/core/Checkbox";
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
  const { classes, data, handleChange } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Encargo Actual
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Ente Publico"
              className={classes.textField}
              value={data.datos_encargo_actual.ente_publico}
              onChange={handleChange("ente_publico")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Nombre del Empleo"
              className={classes.textField}
              value={data.datos_encargo_actual.empleo_cargo_comision}
              onChange={handleChange("empleo_cargo_comision")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="nivel_gobierno">
                Nivel de Gobierno
              </InputLabel>
              <Select
                value={data.datos_encargo_actual.nivel_gobierno.codigo}
                onChange={handleChange("nivel_gobierno")}
                inputProps={{
                  name: "nivel_gobierno",
                  id: "nivel_gobierno"
                }}
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
              <InputLabel htmlFor="poder_juridico">Poder Juridico</InputLabel>
              <Select
                value={data.datos_encargo_actual.poder_juridico.codigo}
                onChange={handleChange("poder_juridico")}
                inputProps={{
                  name: "poder_juridico",
                  id: "poder_juridico"
                }}
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
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_encargo_actual.contratado_honorarios}
                  onChange={handleChange("contratado_honorarios")}
                  color="primary"
                />
              }
              label="Contratado por honorarios"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Nivel de encargo"
              className={classes.textField}
              value={data.datos_encargo_actual.nivel_encargo}
              onChange={handleChange("nivel_encargo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Área de adscripción"
              className={classes.textField}
              value={data.datos_encargo_actual.area_adscripcion}
              onChange={handleChange("area_adscripcion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Fecha de posesión"
              className={classes.textField}
              value={data.datos_encargo_actual.fecha_posesion}
              onChange={handleChange("fecha_posesion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Telefono laboral"
              className={classes.textField}
              value={data.datos_encargo_actual.telefono_laboral.numero}
              onChange={handleChange("telefono_laboral.numero")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="grado"
              label="Extensión"
              className={classes.textField}
              value={data.datos_encargo_actual.telefono_laboral.extension}
              onChange={handleChange("telefono_laboral.extension")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_encargo_actual.sector_industria.codigo}
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
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    data.datos_encargo_actual.funciones_principales[0].codigo
                  }
                  onChange={handleChange("funciones_principales.codigo")}
                  value="datos_encargo_actual.funciones_principales.codigo"
                  color="primary"
                />
              }
              label="Funciones******************************************************"
            />
          </Grid>
          <Grid item xs={12}>
            <Direccion
              data={data.datos_encargo_actual.direccion_encargo}
              ciudades={data.ciudades}
              entidades={data.entidades}
              municipios={data.municipios}
              localidades={data.localidades}
              tipovialidad={data.tipovialidad}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
