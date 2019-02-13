import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Direccion from "./Direccion";
import Tabla from "./TablaDependientesEconomicos";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

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

// estilos para los select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function SimpleCard(props) {
  const { classes, data, handleChange, addClick, removeClick } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Dependientes Economicos
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Tipo de Relación</InputLabel>
              <Select
                value={data.datos_dependientes_economicos.tipo_relacion.codigo}
                onChange={handleChange("tipo_relacion")}
              >
                {data.relacionDeclarante.map(relacionDeclarante => (
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
            <TextField
              label="Nombres"
              className={classes.textField}
              value={data.datos_dependientes_economicos.nombre_personal.nombres}
              onChange={handleChange("nombre_personal.nombres")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Segundo apellido"
              className={classes.textField}
              value={
                data.datos_dependientes_economicos.nombre_personal
                  .primer_apellido
              }
              onChange={handleChange("nombre_personal.primer_apellido")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              label="Primer apellido"
              className={classes.textField}
              value={
                data.datos_dependientes_economicos.nombre_personal
                  .segundo_apellido
              }
              onChange={handleChange("nombre_personal.segundo_apellido")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Nacionalidades
              </InputLabel>
              <Select
                multiple
                value={data.dependientes_economicos_nacionlidades}
                onChange={handleChange("nacionalidades")}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {data.ciudades.map(ciudad => (
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                    <Checkbox
                      checked={data.nacionalidad.indexOf(ciudad.codigo) > -1}
                    />
                    <ListItemText primary={ciudad.valor} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="CURP"
              className={classes.textField}
              value={data.datos_dependientes_economicos.curp}
              onChange={handleChange("curp")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="RFC"
              className={classes.textField}
              value={data.datos_dependientes_economicos.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Fecha de nacimiento"
              className={classes.textField}
              value={data.datos_dependientes_economicos.fecha_nacimiento}
              onChange={handleChange("fecha_nacimiento")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Numero de identificacion Nacional"
              className={classes.textField}
              value={
                data.datos_dependientes_economicos
                  .numero_identificacion_nacional
              }
              onChange={handleChange("numero_identificacion_nacional")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    data.datos_dependientes_economicos
                      .habita_domicilio_declarante
                  }
                  value="true"
                  onChange={handleChange("habita_domicilio_declarante")}
                  color="primary"
                />
              }
              label="Habita el domicilio del declarante"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Medio de contacto"
              className={classes.textField}
              value={data.datos_dependientes_economicos.medio_contacto}
              onChange={handleChange("medio_contacto")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_dependientes_economicos.ingresos_propios}
                  value="true"
                  onChange={handleChange("ingresos_propios")}
                  color="primary"
                />
              }
              label="Ingresos propios"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Ocupación/Profesión"
              className={classes.textField}
              value={data.datos_dependientes_economicos.ocupacion_profesion}
              onChange={handleChange("ocupacion_profesion")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
              <Select
                value={
                  data.datos_dependientes_economicos.sector_industria.codigo
                }
                onChange={handleChange("sector_industria")}
              >
                {data.sectorIndustria.map(sectorIndustria => (
                  <MenuItem
                    key={sectorIndustria.codigo}
                    value={sectorIndustria.codigo}
                  >
                    {sectorIndustria.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    data.datos_dependientes_economicos
                      .proveedor_contratista_gobierno
                  }
                  value="true"
                  onChange={handleChange("proveedor_contratista_gobierno")}
                  color="primary"
                />
              }
              label="¿Es proveedor o contratista de gobierno?"
            />
          </Grid>
          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    data.datos_dependientes_economicos
                      .tiene_intereses_mismo_sector_declarante
                  }
                  value="true"
                  onChange={handleChange(
                    "tiene_intereses_mismo_sector_declarante"
                  )}
                  color="primary"
                />
              }
              label="¿Tiene el familiar o dependiente intereses en el mismo sector/industria al que pertenece el empleo oficial del Declarante?"
            />
          </Grid>
          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    data.datos_dependientes_economicos
                      .desarrolla_cabildeo_sector_declarante.respuesta
                  }
                  value="true"
                  onChange={handleChange(
                    "desarrolla_cabildeo_sector_declarante.respuesta"
                  )}
                  color="primary"
                />
              }
              label="¿Desarrolla el familiar o dependiente actividades de cabildeo en el mismo sector/industria al que pertenece el empleo oficial del Declarante?"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Observaciones/Comentarios de actividades de cabildeo del familiar/dependiente"
              className={classes.textField}
              value={
                data.datos_dependientes_economicos
                  .desarrolla_cabildeo_sector_declarante.observaciones
              }
              onChange={handleChange(
                "desarrolla_cabildeo_sector_declarante.observaciones"
              )}
              margin="normal"
              multiline={true}
            />
          </Grid>

          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  value="true"
                  onChange={handleChange("beneficiario_programa_publico")}
                  color="primary"
                />
              }
              label="¿El familiar o dependiente es beneficiario directo de un programa público (apoyo, subsidio, transferencia)?********************"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Observaciones/Comentarios"
              className={classes.textField}
              value={data.datos_dependientes_economicos.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Direccion
              data={data.datos_dependientes_economicos.domicilio}
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
            data={data.dependientes_economicos}
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
