import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// //import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "../Direccion/";
import Tabla from "./TablaMembresias";

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
          Membresías
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_institucion">
                Tipo de institución
              </InputLabel>
              <Select
                value={data.datos_membresias.tipo_institucion.codigo}
                onChange={handleChange("tipo_institucion")}
                inputProps={{
                  name: "tipo_institucion",
                  id: "tipo_institucion"
                }}
              >
                {data.catTipoInstitucion.map(tipoInstitucion => (
                  <MenuItem
                    key={tipoInstitucion.codigo}
                    value={tipoInstitucion.codigo}
                  >
                    {tipoInstitucion.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre de la institución"
              className={classes.textField}
              value={data.datos_membresias.nombre_institucion}
              onChange={handleChange("nombre_institucion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="naturaleza_membresia">
                Naturaleza de la membresía
              </InputLabel>
              <Select
                value={data.datos_membresias.naturaleza_membresia.codigo}
                onChange={handleChange("naturaleza_membresia")}
                inputProps={{
                  name: "naturaleza_membresia",
                  id: "naturaleza_membresia"
                }}
              >
                {data.catNaturalezaMembresia.map(data => (
                  <MenuItem key={data.codigo} value={data.codigo}>
                    {data.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_membresias.sector_industria.codigo}
                onChange={handleChange("sector_industria")}
                inputProps={{
                  name: "sector_industria",
                  id: "sector_industria"
                }}
              >
                {data.catSectorIndustria.map(dato => (
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
              label="Puesto/Rol"
              className={classes.textField}
              value={data.datos_membresias.puesto_rol}
              onChange={handleChange("puesto_rol")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de inicio"
              className={classes.textField}
              value={data.datos_membresias.fecha_inicio}
              onChange={handleChange("fecha_inicio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_membresias.pagado}
                  value="Habita el domicilio del declarante"
                  onChange={handleChange("pagado")}
                  color="primary"
                />
              }
              label="¿Pagado o no pagado?"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_membresias.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={data.datos_membresias.domicilio}
              catPaises={data.catPaises}
              catEntidadesFederativas={data.catEntidadesFederativas}
              catMunicipios={data.catMunicipios}
              catLocalidades={data.catLocalidades}
              catTipoVialidad={data.catTipoVialidad}
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
          <Tabla data={data.membresias} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
