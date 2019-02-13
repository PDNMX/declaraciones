import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaCuentasCobrar";

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
          Cuentas por cobrar
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre del prestatario"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.nombre_prestatario}
              onChange={handleChange("nombre_prestatario")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de registro"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.numero_registro}
              onChange={handleChange("numero_registro")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_cuentas_por_cobrar.sector_industria.codigo}
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
              label="Fecha del préstamo"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.fecha_prestamo}
              onChange={handleChange("fecha_prestamo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Monto original del préstamo"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.monto_original_prestamo}
              onChange={handleChange("monto_original_prestamo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Tasa de interés"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.tasa_interes}
              onChange={handleChange("tasa_interes")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Saldo pendiente"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.saldo_pendiente}
              onChange={handleChange("saldo_pendiente")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de vencimiento"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.fecha_vencimiento}
              onChange={handleChange("fecha_vencimiento")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje de propiedad en caso de copropiedad"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.porcentaje_copropiedad}
              onChange={handleChange("porcentaje_copropiedad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre del copropietario"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.nombre_copropietario}
              onChange={handleChange("nombre_copropietario")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_cuentas_por_cobrar.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={data.datos_cuentas_por_cobrar.domicilio_prestatarios}
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
          <Tabla data={data.cuentas_por_cobrar} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
