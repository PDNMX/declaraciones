import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaSociosComerciales";

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
          Socios Comerciales
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre de la actividad comercial vinculante"
              className={classes.textField}
              value={data.datos_socios_comerciales.nombre_actividad}
              onChange={handleChange("nombre_actividad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Tipo de vinculo"
              className={classes.textField}
              value={data.datos_socios_comerciales.tipo_vinculo}
              onChange={handleChange("tipo_vinculo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Antiguedad del vinculo (meses)"
              className={classes.textField}
              value={data.datos_socios_comerciales.antiguedad_vinculo}
              onChange={handleChange("antiguedad_vinculo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC de la entidad"
              className={classes.textField}
              value={data.datos_socios_comerciales.rfc_entidad}
              onChange={handleChange("rfc_entidad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, del socio comercial"
              className={classes.textField}
              value={data.datos_socios_comerciales.nombre}
              onChange={handleChange("nombre")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP del socio"
              className={classes.textField}
              value={data.datos_socios_comerciales.curp}
              onChange={handleChange("curp")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC del socio"
              className={classes.textField}
              value={data.datos_socios_comerciales.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="nacionalidad">Nacionalidad</InputLabel>
              <Select
                value={
                  data.datos_socios_comerciales.lugar_nacimiento.pais.codigo
                }
                onChange={handleChange("lugar_nacimiento.pais")}
                inputProps={{
                  name: "nacionalidad",
                  id: "nacionalidad"
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

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="entidad">Entidad federativa</InputLabel>
              <Select
                value={
                  data.datos_socios_comerciales.lugar_nacimiento.entidad.cve_agee
                }
                onChange={handleChange("lugar_nacimiento.entidad")}
                inputProps={{
                  name: "entidad",
                  id: "entidad"
                }}
              >
                {data.catEntidadesFederativas.map(entidad => (
                  <MenuItem key={entidad.cve_agee} value={entidad.cve_agee}>
                    {entidad.nom_agee}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de nacimiento del socio"
              className={classes.textField}
              value={data.datos_socios_comerciales.fecha_nacimiento}
              onChange={handleChange("fecha_nacimiento")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje de participación del socio"
              className={classes.textField}
              value={data.datos_socios_comerciales.porcentaje_participacion}
              onChange={handleChange("porcentaje_participacion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_socios_comerciales.sector_industria.codigo}
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
              label="Observaciones"
              className={classes.textField}
              value={data.datos_socios_comerciales.observaciones}
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
          <Tabla data={data.socios_comerciales} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
