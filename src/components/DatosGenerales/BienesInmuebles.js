import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaBienesInmuebles";

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
          Bienes inmuebles
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_operacion">
                Tipo de operación
              </InputLabel>
              <Select
                value={data.datos_bienes_inmuebles.tipo_operacion.codigo}
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
              <InputLabel htmlFor="tipo_bien">Tipo de bien</InputLabel>
              <Select
                value={data.datos_bienes_inmuebles.tipo_bien.codigo}
                onChange={handleChange("tipo_bien")}
                inputProps={{
                  name: "tipo_bien",
                  id: "tipo_bien"
                }}
              >
                {data.catTiposBienes.map(tipoBien => (
                  <MenuItem key={tipoBien.codigo} value={tipoBien.codigo}>
                    {tipoBien.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Superficie del terreno"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.superficie_terreno}
              onChange={handleChange("superficie_terreno")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Superficie de construcción"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.superficie_construccion}
              onChange={handleChange("superficie_construccion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="titular">Titular</InputLabel>
              <Select
                value={data.datos_bienes_inmuebles.titular.codigo}
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
              label="Porcentaje de propiedad"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.porcentaje_propiedad}
              onChange={handleChange("porcentaje_propiedad")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre del copropietario"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.nombre_copropietario.nombres}
              onChange={handleChange("nombre_copropietario.nombres")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Numero de escritura pública"
              className={classes.textField}
              value={
                data.datos_bienes_inmuebles.identificacion_bien
                  .numero_escritura_publica
              }
              onChange={handleChange(
                "identificacion_bien.numero_escritura_publica"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Numero de registro público"
              className={classes.textField}
              value={
                data.datos_bienes_inmuebles.identificacion_bien
                  .numero_registro_publico
              }
              onChange={handleChange(
                "identificacion_bien.numero_registro_publico"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Folio real"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.identificacion_bien.folio_real}
              onChange={handleChange("identificacion_bien.folio_real")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Fecha de contrato"
              className={classes.textField}
              value={
                data.datos_bienes_inmuebles.identificacion_bien.fecha_contrato
              }
              onChange={handleChange("identificacion_bien.fecha_contrato")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="forma_adquisicion">
                Forma de adquisición
              </InputLabel>
              <Select
                value={data.datos_bienes_inmuebles.forma_adquisicion.codigo}
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
              label="Nombre, denominación o razón social de quien se adquirió el inmueble"
              className={classes.textField}
              value={
                data.datos_bienes_inmuebles.nombre_denominacion_quien_adquirio
              }
              onChange={handleChange("nombre_denominacion_quien_adquirio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="RFC"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.rfc_quien_adquirio}
              onChange={handleChange("rfc_quien_adquirio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="CURP"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.curp_quien_adquirio}
              onChange={handleChange("curp_quien_adquirio")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="relacion">Relación</InputLabel>
              <Select
                value={
                  data.datos_bienes_inmuebles.relacion_persona_adquirio.codigo
                }
                onChange={handleChange("relacion_persona_adquirio")}
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
                value={data.datos_bienes_inmuebles.sector_industria.codigo}
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
              value={data.datos_bienes_inmuebles.fecha_adquisicion}
              onChange={handleChange("fecha_adquisicion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Precio de adquisición"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.precio_adquisicion.valor}
              onChange={handleChange("precio_adquisicion")}
              margin="normal"
            />
          </Grid> 
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="moneda">Moneda</InputLabel>
              <Select
                value={
                  data.datos_bienes_inmuebles.precio_adquisicion.moneda
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
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Valor catastral"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.valor_catastral}
              onChange={handleChange("valor_catastral")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_bienes_inmuebles.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <Direccion
              data={data.datos_bienes_inmuebles.domicilio_bien}
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
          <Tabla data={data.bienes_inmuebles} buttonClick={removeClick} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
