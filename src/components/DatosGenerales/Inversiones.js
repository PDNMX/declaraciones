import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaInversiones";

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
          Inversiones, cuentas, valores (acciones, bonos valores, títulos,
          cuentas de ahorro o bancarias o con entidades financieras, fondo de
          retiro, etc.)
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.tipo_operacion.codigo
                }
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
              <InputLabel htmlFor="tipo_inversion">
                Tipo de inversión
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.tipo_inversion.codigo
                }
                onChange={handleChange("tipo_inversion")}
                inputProps={{
                  name: "tipo_inversion",
                  id: "tipo_inversion"
                }}
              >
                {data.catTiposInversiones.map(tipoInversion => (
                  <MenuItem
                    key={tipoInversion.codigo}
                    value={tipoInversion.codigo}
                  >
                    {tipoInversion.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_especifico_inversion">
                Tipo específico de la inversión
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores
                    .tipo_especifico_inversion.codigo
                }
                onChange={handleChange("tipo_especifico_inversion")}
                inputProps={{
                  name: "tipo_especifico_inversion",
                  id: "tipo_especifico_inversion"
                }}
              >
                {data.catTiposEspecificosInversion.map(
                  tipoEspecificoInversion => (
                    <MenuItem
                      key={tipoEspecificoInversion.codigo}
                      value={tipoEspecificoInversion.codigo}
                    >
                      {tipoEspecificoInversion.valor}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Número de cuenta, contrato o identificador de la inversión"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.numero_cuenta}
              onChange={handleChange("numero_cuenta")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">
                Nacional o extranjero
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.nacional_extranjero
                    .codigo
                }
                onChange={handleChange("nacional_extranjero")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
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
              label="Nombre de la institución"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.nombre_institucion}
              onChange={handleChange("nombre_institucion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC de la institución"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.rfc_institucion}
              onChange={handleChange("rfc_institucion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.sector_industria.codigo
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
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="forma_adquisicion">
                Forma de adquisición
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.forma_adquisicion
                    .codigo
                }
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
              label="fecha de inicio"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.fecha_inicio}
              onChange={handleChange("fecha_inicio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Monto original"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.monto_original}
              onChange={handleChange("monto_original")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.tipo_moneda.codigo
                }
                onChange={handleChange("tipo_moneda")}
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
              label="Tasa de interés"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.tasa_interes}
              onChange={handleChange("tasa_interes")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Saldo al año que se reporta"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.saldo_anual}
              onChange={handleChange("saldo_anual")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Plazo"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.plazo}
              onChange={handleChange("plazo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="unidad_medida_plazo">
                Unidad de medida del plazo
              </InputLabel>
              <Select
                value={
                  data.datos_inversiones_cuentas_valores.unidad_medida_plazo
                    .codigo
                }
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
                value={
                  data.datos_inversiones_cuentas_valores.titular_bien.codigo
                }
                onChange={handleChange("titular_bien")}
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
              label="Porcentaje de la inversión"
              className={classes.textField}
              value={
                data.datos_inversiones_cuentas_valores.porcentaje_inversion
              }
              onChange={handleChange("porcentaje_inversion")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_inversiones_cuentas_valores.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={
                data.datos_inversiones_cuentas_valores.domicilio_institucion
              }
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
            data={data.inversiones_cuentas_valores}
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
