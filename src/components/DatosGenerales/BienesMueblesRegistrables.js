import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaBienesMueblesResgistrables";

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
          Bienes muebles registrables (vehículos, barcos, aeronaves, maquinaria,
          etc.)
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.tipo_operacion.codigo
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
              <InputLabel htmlFor="tipo_bien_inmueble">
                Tipo de bien mueble
              </InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.tipo_bien_mueble.codigo
                }
                onChange={handleChange("tipo_bien_inmueble")}
                inputProps={{
                  name: "tipo_bien_inmueble",
                  id: "tipo_bien_inmueble"
                }}
              >
                {data.catTiposBienesInmuebles.map(tiposBienesInmuebles => (
                  <MenuItem
                    key={tiposBienesInmuebles.codigo}
                    value={tiposBienesInmuebles.codigo}
                  >
                    {tiposBienesInmuebles.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Marca"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.marca}
              onChange={handleChange("marca")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Submarca, linea, tipo"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.submarca}
              onChange={handleChange("submarca")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Modelo"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.modelo}
              onChange={handleChange("modelo")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Numero de serie"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.numero_serie}
              onChange={handleChange("numero_serie")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="pais_registro">País registro</InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.lugar_registro.pais
                    .codigo
                }
                onChange={handleChange("lugar_registro.pais")}
                inputProps={{
                  name: "pais_registro",
                  id: "pais_registro"
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
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="entidad_registro">
                Entidad registro
              </InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.lugar_registro.entidad
                    .cve_ent
                }
                onChange={handleChange("lugar_registro.entidad")}
                inputProps={{
                  name: "entidad_registro",
                  id: "entidad_registro"
                }}
              >
                {data.catEntidadesFederativas.map(entidadesFederativas => (
                  <MenuItem
                    key={entidadesFederativas.cve_ent}
                    value={entidadesFederativas.cve_ent}
                  >
                    {entidadesFederativas.nom_ent}
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
                  data.datos_bienes_muebles_registrables.titular_bien.codigo
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
              label="Porcentaje de propiedad"
              className={classes.textField}
              value={
                data.datos_bienes_muebles_registrables.porcentaje_propiedad
              }
              onChange={handleChange("porcentaje_propiedad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre del copropietario"
              className={classes.textField}
              value={
                data.datos_bienes_muebles_registrables.nombres_copropietarios
              }
              onChange={handleChange("nombres_copropietarios")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Numero de registro vehicular"
              className={classes.textField}
              value={
                data.datos_bienes_muebles_registrables.numero_registro_vehicular
              }
              onChange={handleChange("numero_registro_vehicular")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="forma_adquisicion">
                Forma de adquisición
              </InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.forma_adquisicion
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
              label="Nombre, denominación o razón social de quien se adquirió el mueble"
              className={classes.textField}
              value={
                data.datos_bienes_muebles_registrables
                  .nombre_denominacion_adquirio
              }
              onChange={handleChange("nombre_denominacion_adquirio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.rfc_quien_adquirio}
              onChange={handleChange("rfc_quien_adquirio")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="relacion">Relación</InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables
                    .relacion_persona_quien_adquirio.codigo
                }
                onChange={handleChange("relacion_persona_quien_adquirio")}
                inputProps={{
                  name: "relacion",
                  id: "relacion"
                }}
              >
                {data.catRelacionDeclarante.map(relacionDeclarante => (
                  <MenuItem
                    key={relacionDeclarante.codigo}
                    value={relacionDeclarante.codigo}
                  >
                    {relacionDeclarante.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.sector_industria.codigo
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
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de adquisición"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.fecha_adquisicion}
              onChange={handleChange("fecha_adquisicion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Precio de adquisición"
              className={classes.textField}
              value={
                data.datos_bienes_muebles_registrables.precio_adquisicion.valor
              }
              onChange={handleChange("precio_adquisicion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_bienes_muebles_registrables.precio_adquisicion
                    .moneda.codigo
                }
                onChange={handleChange("precio_adquisicion.moneda")}
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
              label="Observaciones"
              className={classes.textField}
              value={data.datos_bienes_muebles_registrables.observaciones}
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
          <Tabla
            data={data.bienes_muebles_registrables}
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
