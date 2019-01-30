import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaDeudas";

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
          Deudas
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={data.datos_deudas.tipo_operacion.codigo}
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
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_acreedor">Tipo de acreedor</InputLabel>
              <Select
                value={data.datos_deudas.tipo_acreedor.codigo}
                onChange={handleChange("tipo_acreedor")}
                inputProps={{
                  name: "tipo_acreedor",
                  id: "tipo_acreedor"
                }}
              >
                {data.catTiposAcredores.map(tipoAcreedor => (
                  <MenuItem
                    key={tipoAcreedor.codigo}
                    value={tipoAcreedor.codigo}
                  >
                    {tipoAcreedor.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_adeudo">Tipo de adeudo</InputLabel>
              <Select
                value={data.datos_deudas.tipo_adeudo.codigo}
                onChange={handleChange("tipo_adeudo")}
                inputProps={{
                  name: "tipo_adeudo",
                  id: "tipo_adeudo"
                }}
              >
                {data.catTiposAdeudos.map(tipoAdeudo => (
                  <MenuItem key={tipoAdeudo.codigo} value={tipoAdeudo.codigo}>
                    {tipoAdeudo.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de cuenta, contrato o identificador de la deuda"
              className={classes.textField}
              value={data.datos_deudas.identificador_deuda}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">
                Nacional o extranjero
              </InputLabel>
              <Select
                value={data.datos_deudas.nacional_extranjero.codigo}
                onChange={handleChange("estado_civil")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
                }}
              >
                {data.estadosciviles.map(estadocivil => (
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo}>
                    {estadocivil.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, denominación o razón social del acreedor"
              className={classes.textField}
              value={data.datos_deudas.nombre_acreedor}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC del acreedor"
              className={classes.textField}
              value={data.datos_deudas.rfc_acreedor}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={data.datos_deudas.sector_industria.codigo}
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
              label="Fecha en la que se generó el adeudo"
              className={classes.textField}
              value={data.datos_deudas.fecha_adeudo}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Monto original del adeudo"
              className={classes.textField}
              value={data.datos_deudas.monto_original}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_moneda">Tipo de moneda</InputLabel>
              <Select
                value={data.datos_deudas.tipo_moneda.codigo}
                onChange={handleChange("tipo_moneda")}
                inputProps={{
                  name: "tipo_moneda",
                  id: "tipo_moneda"
                }}
              >
                {data.catTiposMonedas.map(tipoMoneda => (
                  <MenuItem key={tipoMoneda.codigo} value={tipoMoneda.codigo}>
                    {tipoMoneda.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Tasa de interés"
              className={classes.textField}
              value={data.datos_deudas.tasa_interes}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Saldo pendiente"
              className={classes.textField}
              value={data.datos_deudas.saldo_pendiente}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Montos abonados a favor de la deuda"
              className={classes.textField}
              value={data.datos_deudas.montos_abonados}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Plazo del adeudo"
              className={classes.textField}
              value={data.datos_deudas.plazo_adeudo}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="unidad_medida_plazo">
                Unidad de medida del plazo
              </InputLabel>
              <Select
                value={data.datos_deudas.unidad_medida_adeudo.codigo}
                onChange={handleChange("unidad_medida_plazo")}
                inputProps={{
                  name: "unidad_medida_plazo",
                  id: "unidad_medida_plazo"
                }}
              >
                {data.catMedidasPlazos.map(medidaPlazo => (
                  <MenuItem key={medidaPlazo.codigo} value={medidaPlazo.codigo}>
                    {medidaPlazo.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="titular">Titular</InputLabel>
              <Select
                value={data.datos_deudas.titularidad_deuda.codigo}
                onChange={handleChange("titular")}
                inputProps={{
                  name: "titular",
                  id: "titular"
                }}
              >
                {data.catTitularesBienes.map(titularBien => (
                  <MenuItem key={titularBien.codigo} value={titularBien.codigo}>
                    {titularBien.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Porcentaje del adeudo del titular"
              className={classes.textField}
              value={data.datos_deudas.porcentaje_adeudo_titular}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="¿Se otorgó garantía?"
              className={classes.textField}
              value={data.datos_deudas.garantia}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre, denominación o razón social del garante"
              className={classes.textField}
              value={data.datos_deudas.nombre_garante}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_deudas.observaciones}
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
          <Tabla data={data.deudas} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
