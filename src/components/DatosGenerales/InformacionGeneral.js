import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
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
import FilledInput from "@material-ui/core/FilledInput";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

/*InputMask*/
import InputMask from 'react-input-mask'
/*InputMask*/

import Direccion from "./Direccion";
// data picker
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


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

// regExp CURP /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
const formatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]',
  'c': '[AEIOUXaeioux]',
  's': '[HMhm]',
  'n': '[0-1]',
  'd': '[0-3]',
  'z': '[1-2]'
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
          <Grid item xs={2}>
            <TextField
              name="nombres"
              label="Nombre(s)"
              className={classes.textField}
              value={data.informacion_general.nombres}
              onChange={handleChange("nombres")}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="primer_apellido"
              label="Primer Apellido"
              className={classes.textField}
              value={data.informacion_general.primer_apellido}
              onChange={handleChange("primer_apellido")}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="segundo_apellido"
              label="Segundo Apellido"
              className={classes.textField}
              value={data.informacion_general.segundo_apellido}
              onChange={handleChange("segundo_apellido")}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl variant="filled" className={classes.select}>
              <InputLabel htmlFor="pais_nacimiento">
                País de Nacimiento
              </InputLabel>
              <Select
                value={data.informacion_general.pais_nacimiento.codigo}
                onChange={handleChange("pais_nacimiento")}
                input={<FilledInput id="pais_nacimiento" name="pais_nacimiento" />}
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
            <FormControl variant="filled" className={classes.select}>
              <InputLabel htmlFor="entidad_federativa_nacimiento">
                Entidad federativa de nacimiento
              </InputLabel>
              <Select
                value={
                  data.informacion_general.entidad_federativa_nacimiento.cve_ent
                }
                onChange={handleChange(
                  "entidad_federativa_nacimiento"
                )}
                input={<FilledInput id="entidad_federativa_nacimiento" name="entidad_federativa_nacimiento" />}
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
            <FormControl variant="filled" className={classes.select}>
              <InputLabel htmlFor="nacionalidades">
                Nacionalidades
              </InputLabel>
              <Select
                multiple
                value={data.informacion_general_nacionalidades}
                onChange={handleChange("nacionalidades")}
                input={<FilledInput id="nacionalidades" name="nacionalidades" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
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
            <InputMask
            mask="acaa999999saaaaa*9"
            formatChars={formatChars}
            maskChar={null}
            value={data.informacion_general.curp}
            onChange={handleChange("curp")}
            className={classes.textField}
          >
            {() => <TextField
              name="curp"
              label="CURP"
              className={classes.textField}
              type="text"
              margin="normal"
              variant="filled"
            />}
          </InputMask>
          </Grid>

          <Grid item xs={2}>
            <InputMask
            mask="acaa999999***"
            formatChars={formatChars}
            maskChar={null}
            value={data.informacion_general.rfc}
            onChange={handleChange("rfc")}
            className={classes.textField}
          >
            {() => <TextField
              name="rfc"
              label="RFC"
              className={classes.textField}
              type="text"
              margin="normal"
              variant="filled"
            />}
          </InputMask>
          </Grid>

          <Grid item xs={2}>
            <InputMask
            mask="d9-n9-z999"
            formatChars={formatChars}
            maskChar={null}
            permanents={[2, 5]}
            value={data.informacion_general.fecha_nacimiento}
            onChange={handleChange("fecha_nacimiento")}
            className={classes.textField}
          >
            {() => <TextField
              name="fecha_nacimiento"
              label="Fecha de nacimiento"
              type="text"
              margin="normal"
              variant="filled"
            />}
          </InputMask>
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="numero_identificacion_oficial"
              label="Número de identificación oficial"
              className={classes.textField}
              value={data.informacion_general.numero_identificacion_oficial}
              onChange={handleChange(
                "numero_identificacion_oficial"
              )}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="correo_electronico_personal"
              label="Correo electrónico personal"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.personal}
              onChange={handleChange("correo_electronico.personal")}
              type="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="correo_electronico_laboral"
              label="Correo electrónico laboral"
              className={classes.textField}
              value={data.informacion_general.correo_electronico.laboral}
              onChange={handleChange("correo_electronico.laboral")}
              type="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <InputMask
            mask="(999) 999 9999"
            maskChar={null}
            value={data.informacion_general.telefono.particular}
            onChange={handleChange("telefono.particular")}
            className={classes.textField}
          >
            {() =><TextField
              name="telefono_particular"
              label="Teléfono particular"
              type="text"
              margin="normal"
              variant="filled"
            />}
          </InputMask>
          </Grid>

          <Grid item xs={2}>
            <TextField
              name="telefono_celular"
              label="Teléfono celular"
              className={classes.textField}
              value={data.informacion_general.telefono.celular}
              onChange={handleChange("telefono.celular")}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl variant="filled" className={classes.select}>
              <InputLabel htmlFor="estado_civil">Estado civil</InputLabel>
              <Select id="estado_civil"
                value={data.informacion_general.estado_civil.codigo}
                onChange={handleChange("estado_civil")}
                input={<FilledInput id="estado_civil" name="estado_civil" />}
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
            <FormControl variant="filled" className={classes.select}>
              <InputLabel htmlFor="regimen_matrimonial">
                Régimen matrimonial
              </InputLabel>
              <Select
                value={data.informacion_general.regimen_matrimonial.codigo}
                onChange={handleChange("regimen_matrimonial")}
                input={<FilledInput id="regimen_matrimonial" name="regimen_matrimonial" />}
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
              handleChange={handleChange}
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
