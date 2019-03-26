import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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

// import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";

import Direccion from "../Direccion/";
// data picker
import moment from "moment";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
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
  }
};

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
  const { classes, data, handleChange } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Información General
        </Typography>
        <Grid container spacing={24}>
          {/*Información General*/}
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Nombre(s)"
              className={classes.textField}
              value={data.informacion_general.nombres}
              onChange={handleChange("nombres")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Apellido uno"
              className={classes.textField}
              value={data.informacion_general.primer_apellido}
              onChange={handleChange("primer_apellido")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Apellido dos"
              className={classes.textField}
              value={data.informacion_general.segundo_apellido}
              onChange={handleChange("segundo_apellido")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="CURP"
              className={classes.textField}
              value={data.informacion_general.curp}
              onChange={handleChange("curp")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="RFC"
              className={classes.textField}
              value={data.informacion_general.rfc}
              onChange={handleChange("rfc")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="pais_nacimiento">
                País de Nacimiento
              </InputLabel>
              <Select
                value={data.informacion_general.pais_nacimiento.codigo}
                onChange={handleChange("pais_nacimiento")}
                inputProps={{
                  name: "pais_nacimiento",
                  id: "pais_nacimiento"
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
          {/*Información General*/}

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="entidad_federativa_nacimiento">
                Entidad federativa de nacimiento
              </InputLabel>
              <Select
                value={
                  data.informacion_general.entidad_federativa_nacimiento.cve_agee
                }
                onChange={handleChange("entidad_federativa_nacimiento")}
                inputProps={{
                  name: "entidad_federativa_nacimiento",
                  id: "entidad_federativa_nacimiento"
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

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="select-multiple-checkbox">
                Nacionalidades
              </InputLabel>
              <Select
                multiple
                value={data.nacionalidades}
                onChange={handleChange("nacionalidades")}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {data.catPaises.map(ciudad => (
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                    <Checkbox
                      checked={data.nacionalidades.indexOf(ciudad.codigo) > -1}
                    />
                    <ListItemText primary={ciudad.valor} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="fecha_nacimiento"
              label="Fecha de nacimiento"
              type="date"
              defaultValue={moment(data.fecha_nacimiento, "YYYY-MM-DD")}
              format={"DD-MM-YYYY"}
              className={classes.select}
              onChange={handleChange("fecha_nacimiento")}
              InputLabelProps={{
                shrink: true
              }}
            />
            {/*
            <DatePicker
              selected={fecha_nacimiento}
              onChange={handleChange("fecha_nacimiento")}
            />
            */}
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Numero identificacion oficial"
              className={classes.textField}
              value={data.informacion_general.numero_identificacion_oficial}
              onChange={handleChange("numero_identificacion_oficial")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Correo electrónico personal"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.personal}
              onChange={handleChange("correo_electronico.personal")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Correo electrónico laboral"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.laboral}
              onChange={handleChange("correo_electronico.laboral")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Teléfono particular"
              className={classes.textField}
              value={data.informacion_general.telefono.particular}
              onChange={handleChange("telefono.particular")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Teléfono celular"
              className={classes.textField}
              value={data.informacion_general.telefono.celular}
              onChange={handleChange("telefono.celular")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Estado civil</InputLabel>
              <Select
                value={data.informacion_general.estado_civil.codigo}
                onChange={handleChange("estado_civil")}
                inputProps={{
                  name: "estado_civil",
                  id: "estado_civil"
                }}
              >
                {data.catEstadoCivil.map(estadocivil => (
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo}>
                    {estadocivil.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="regimen_matrimonial">
                Régimen matrimonial
              </InputLabel>
              <Select
                value={data.informacion_general.regimen_matrimonial.codigo}
                onChange={handleChange("regimen_matrimonial")}
                inputProps={{
                  name: "regimen_matrimonial",
                  id: "regimen_matrimonial"
                }}
              >
                {data.catRegimenMatrimonial.map(regimen => (
                  <MenuItem key={regimen.codigo} value={regimen.codigo}>
                    {regimen.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {true && (
              <Direccion
                data={data.informacion_general.domicilio}
                catPaises={data.catPaises}
                catEntidadesFederativas={data.catEntidadesFederativas}
                catMunicipios={data.catMunicipios}
                catLocalidades={data.catLocalidades}
                catTipoVialidad={data.catTipoVialidad}
                handleChange={handleChange}
              />
            )}
          </Grid>
        </Grid>
      </CardContent>

      {/*
        <CardActions>
          <Button variant="contained" size="small" onClick={handleClick()}>
            Guardar
          </Button>
          <div id="messages" className={data.type}>
            {data.message}
          </div>
        </CardActions>
      */}
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
