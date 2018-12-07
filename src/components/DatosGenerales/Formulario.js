import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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

import Direccion from "./Direccion";
// data picker
import moment from "moment";
import DatePicker from "react-datepicker";
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
  const {
    classes,
    data,
    setDataInformacionPersonal
  } = props;

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
              onChange={setDataInformacionPersonal("nombres")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Apellido uno"
              className={classes.textField}
              value={data.informacion_general.primer_apellido}
              onChange={setDataInformacionPersonal("primer_apellido")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Apellido dos"
              className={classes.textField}
              value={data.informacion_general.segundo_apellido}
              onChange={setDataInformacionPersonal("segundo_apellido")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="CURP"
              className={classes.textField}
              value={data.informacion_general.curp}
              onChange={setDataInformacionPersonal("curp")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="RFC"
              className={classes.textField}
              value={data.informacion_general.rfc}
              onChange={setDataInformacionPersonal("rfc")}
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
                onChange={setDataInformacionPersonal("pais_nacimiento")}
                inputProps={{
                  name: "pais_nacimiento",
                  id: "pais_nacimiento"
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
          {/*Información General*/}

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="entidad_federativa_nacimiento">
                Entidad federativa de nacimiento
              </InputLabel>
              <Select
                value={
                  data.informacion_general.entidad_federativa_nacimiento.cve_ent
                }
                onChange={setDataInformacionPersonal(
                  "entidad_federativa_nacimiento"
                )}
                inputProps={{
                  name: "entidad_federativa_nacimiento",
                  id: "entidad_federativa_nacimiento"
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
              <InputLabel htmlFor="select-multiple-checkbox">
                Nacionalidades
              </InputLabel>
              <Select
                multiple
                value={data.informacion_general_nacionalidades}
                onChange={setDataInformacionPersonal("nacionalidades")}
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
          <Grid item xs={2}>

            <TextField
              id="fecha_nacimiento"
              label="Fecha de nacimiento"
              type="date"
              defaultValue={moment(data.fecha_nacimiento).format(
                "DD/MM/YYYY"
              )}
              format={"DD-MM-YYYY"}
              className={classes.select}
              onChange={setDataInformacionPersonal("fecha_nacimiento")}
              InputLabelProps={{
                shrink: true
              }}
            />
            {/*
            <DatePicker
              selected={fecha_nacimiento}
              onChange={setDataInformacionPersonal("fecha_nacimiento")}
            />
            */}

          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Numero identificacion oficial"
              className={classes.textField}
              value={data.informacion_general.numero_identificacion_oficial}
              onChange={setDataInformacionPersonal(
                "numero_identificacion_oficial"
              )}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Correo electrónico personal"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.personal}
              onChange={setDataInformacionPersonal(
                "correo_electronico.personal"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Correo electrónico laboral"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.laboral}
              onChange={setDataInformacionPersonal(
                "correo_electronico.laboral"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Teléfono particular"
              className={classes.textField}
              value={data.informacion_general.telefono.particular}
              onChange={setDataInformacionPersonal("telefono.particular")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-name"
              label="Teléfono celular"
              className={classes.textField}
              value={data.informacion_general.telefono.celular}
              onChange={setDataInformacionPersonal("telefono.celular")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Estado civil</InputLabel>
              <Select
                value={data.informacion_general.estado_civil.codigo}
                onChange={setDataInformacionPersonal("estado_civil")}
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
              <InputLabel htmlFor="regimen_matrimonial">
                Régimen matrimonial
              </InputLabel>
              <Select
                value={data.informacion_general.regimen_matrimonial.codigo}
                onChange={setDataInformacionPersonal("regimen_matrimonial")}
                inputProps={{
                  name: "regimen_matrimonial",
                  id: "regimen_matrimonial"
                }}
              >
                {data.regimen.map(regimen => (
                  <MenuItem key={regimen.codigo} value={regimen.codigo}>
                    {regimen.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Direccion
              data={data.informacion_general.domicilio}
              ciudades={data.ciudades}
              entidades={data.entidades}
              municipios={data.municipios}
              localidades={data.localidades}
              tipovialidad={data.tipovialidad}
              handleChange={setDataInformacionPersonal}
            />
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
