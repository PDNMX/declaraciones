import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaBienesIntangibles";

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
          Bienes intangibles
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={data.datos_bienes_intangibles.tipo_operacion.codigo}
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
              label="Propietario registrado"
              className={classes.textField}
              value={data.datos_bienes_intangibles.propietario_registrado}
              onChange={handleChange("propietario_registrado")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Descripción"
              className={classes.textField}
              value={data.datos_bienes_intangibles.descripcion}
              onChange={handleChange("descripcion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Ente Público encargado del registro"
              className={classes.textField}
              value={
                data.datos_bienes_intangibles.ente_publico_encargado
              }
              onChange={handleChange("ente_publico_encargado")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de registro"
              className={classes.textField}
              value={data.datos_bienes_intangibles.numero_registro}
              onChange={handleChange("numero_registro")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de registro"
              className={classes.textField}
              value={data.datos_bienes_intangibles.fecha_registro}
              onChange={handleChange("fecha_registro")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_bienes_intangibles.sector_industria.codigo}
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
              label="Precio de adquisición"
              className={classes.textField}
              value={data.datos_bienes_intangibles.precio_adquisicion.valor}
              onChange={handleChange("precio_adquisicion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_bienes_intangibles.precio_adquisicion.moneda
                    .codigo
                }
                onChange={handleChange("precio_adquisicion.moneda")}
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
              <InputLabel htmlFor="forma_adquisicion">
                Forma de adquisición
              </InputLabel>
              <Select
                value={data.datos_bienes_intangibles.forma_adquisicion.codigo}
                onChange={handleChange("forma_adquisicion")}
                inputProps={{
                  name: "forma_adquisicion",
                  id: "forma_adquisicion"
                }}
              >
                {data.catFormaAdquision.map(formaAdquision => (
                  <MenuItem
                    key={formaAdquision.codigo}
                    value={formaAdquision.codigo}
                  >
                    {formaAdquision.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de vencimiento"
              className={classes.textField}
              value={data.datos_bienes_intangibles.fecha_vencimiento}
              onChange={handleChange("fecha_vencimiento")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje de propiedad en caso de copropiedad"
              className={classes.textField}
              value={data.datos_bienes_intangibles.porcentaje_copropiedad}
              onChange={handleChange("porcentaje_copropiedad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Precio total de adquisición en caso de copropiedad"
              className={classes.textField}
              value={
                data.datos_bienes_intangibles.precio_total_copropiedad.valor
              }
              onChange={handleChange("precio_total_copropiedad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_bienes_intangibles.precio_total_copropiedad.moneda
                    .codigo
                }
                onChange={handleChange("precio_total_copropiedad.moneda")}
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
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, denominación o razón social del copropietario"
              className={classes.textField}
              value={data.datos_bienes_intangibles.nombre_copropietario}
              onChange={handleChange("nombre_copropietario")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje de propiedad del copropietario"
              className={classes.textField}
              value={
                data.datos_bienes_intangibles.porcentaje_propiedad_copropietario
              }
              onChange={handleChange("porcentaje_propiedad_copropietario")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_bienes_intangibles.observaciones}
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
          <Tabla data={data.bienes_intangibles} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
