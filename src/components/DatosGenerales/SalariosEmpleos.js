import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaSalariosEmpleos";

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

// data picker
import moment from "moment";

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
  const {
    classes,
    data,
    handleClickSalariosEmpleos,
    handleChange,
    handleChangeEntidades,
    handleChangeEdoCivil,
    handleChangeRegimen,
    handleChangeDirPais,
    handleChangeMunicipios,
    handleChangeLocalidades,
    handleChangeTipoVialidad,
    handleChangeNombreVialidad,
    handleClick
  } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sueldos y salarios por otros empleos
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Nombre, denominación o razón social"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="RFC"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="CURP"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="estado_civil">Sector/Industria</InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChangeEdoCivil("estado_civil")}
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
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="estado_civil">Tipo de actividad</InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChangeEdoCivil("estado_civil")}
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
            label="Descripción de la actividad"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Ingreso bruto anual recibido por el encargo público"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="estado_civil">Moneda</InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChangeEdoCivil("estado_civil")}
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
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="estado_civil">Frecuencia</InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChangeEdoCivil("estado_civil")}
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
            label="Duración"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
          </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Fecha de pago"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Observaciones"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
            multiline={true}
          />
        </Grid>

        {/*domicilio*/}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Domicilio
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={2}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="dom_pais">País</InputLabel>
                <Select
                  value={data.dom_pais.codigo}
                  onChange={handleChangeDirPais("dom_pais")}
                  inputProps={{
                    name: "dom_pais",
                    id: "dom_pais"
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
                <InputLabel htmlFor="dom_entidad_federativa">
                  Entidad federativa
                </InputLabel>
                <Select
                  value={data.dom_entidad_federativa.cve_ent}
                  onChange={handleChangeEntidades("dom_entidad_federativa")}
                  inputProps={{
                    name: "dom_entidad_federativa",
                    id: "dom_entidad_federativa"
                  }}
                >
                  {data.entidades.map(entidad => (
                    <MenuItem key={entidad.cve_ent} value={entidad.cve_ent}>
                      {entidad.nom_ent}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="dom_municipio">Municipio</InputLabel>
                <Select
                  value={data.dom_municipio.cve_mun}
                  onChange={handleChangeMunicipios("dom_municipio")}
                  inputProps={{
                    name: "dom_municipio",
                    id: "dom_municipio"
                  }}
                >
                  {data.municipios.map(municipios => (
                    <MenuItem
                      key={municipios.cve_mun}
                      value={municipios.cve_mun}
                    >
                      {municipios.nom_mun}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="dom_localidad">Localidad</InputLabel>
                <Select
                  value={data.dom_localidad.cve_loc}
                  onChange={handleChangeLocalidades("dom_localidad")}
                  inputProps={{
                    name: "dom_localidad",
                    id: "dom_localidad"
                  }}
                >
                  {data.localidades.map(localidades => (
                    <MenuItem
                      key={localidades.cve_loc}
                      value={localidades.cve_loc}
                    >
                      {localidades.nom_loc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-name"
                label="Código postal"
                className={classes.textField}
                value={data.dom_cp}
                onChange={handleChange("dom_cp")}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="dom_vialidad">Tipo de vía</InputLabel>
                <Select
                  value={data.dom_vialidad.codigo}
                  onChange={handleChangeTipoVialidad("dom_vialidad")}
                  inputProps={{
                    name: "dom_vialidad",
                    id: "dom_vialidad"
                  }}
                >
                  {data.tipovialidad.map(tipovialidad => (
                    <MenuItem
                      key={tipovialidad.codigo}
                      value={tipovialidad.codigo}
                    >
                      {tipovialidad.valor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-name"
                label="Nombre de la vía"
                className={classes.textField}
                value={data.dom_vialidad.nom_vial}
                onChange={handleChangeNombreVialidad()}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-name"
                label="Número exterior"
                className={classes.textField}
                value={data.dom_numExt}
                onChange={handleChange("dom_numExt")}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-name"
                label="Número interior"
                className={classes.textField}
                value={data.dom_numInt}
                onChange={handleChange("dom_numInt")}
                margin="normal"
              />
            </Grid>
          </Grid>
        </CardContent>
        {/*fin domicilio*/}















          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClickSalariosEmpleos()}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Tabla data={data.sueldos_salarios_otros_empleos} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
