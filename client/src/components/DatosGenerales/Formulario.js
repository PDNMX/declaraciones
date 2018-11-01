import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
/*select*/

/*Multiselect*/
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
/*Multiselect*/




// data picker
import moment from 'moment';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 18,
  },
  textField:{
    width : '100%'
  },
  select:{
    //minWidth: 335,
    marginTop: 15,
    width : '100%'
  },
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SimpleCard(props) {

  const {
    classes,
    data,
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

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Información General
        </Typography>
        <Grid container spacing={24}>
            {/*Información General*/}
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Nombre(s)"
                    className={classes.textField}
                    value={data.nombres}
                    onChange={handleChange('nombres')}
                    margin="normal"

                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Apellido uno"
                    className={classes.textField}
                    value={data.primer_apellido}
                    onChange={handleChange('primer_apellido')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Apellido dos"
                    className={classes.textField}
                    value={data.segundo_apellido}
                    onChange={handleChange('segundo_apellido')}
                    margin="normal"
                />
            </Grid>

            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="CURP"
                    className={classes.textField}
                    value={data.curp}
                    onChange={handleChange('curp')}
                    margin="normal"
                />
            </Grid>


            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="RFC"
                    className={classes.textField}
                    value={data.rfc}
                    onChange={handleChange('rfc')}
                    margin="normal"
                />
            </Grid>

            <Grid item xs={3} >
              <FormControl className={classes.select} >
                <InputLabel htmlFor="pais_nacimiento">País de Nacimiento</InputLabel>
                <Select
                  value={data.pais_nacimiento.codigo}
                  onChange={handleChangeDirPais('pais_nacimiento')}
                  inputProps={{
                    name: 'pais_nacimiento',
                    id: 'pais_nacimiento',
                  }}
                >
                {data.ciudades.map(ciudad =>
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo} >{ciudad.valor}</MenuItem>
                )}
                </Select>
              </FormControl>
            </Grid>
            {/*Información General*/}

            <Grid item xs={3} >
              <FormControl className={classes.select} >
                <InputLabel htmlFor="entidad_federativa_nacimiento">Entidad federativa de nacimiento</InputLabel>
                <Select
                  value={data.entidad_federativa_nacimiento.cve_ent}
                  onChange={handleChangeEntidades('entidad_federativa_nacimiento')}
                  inputProps={{
                    name: 'entidad_federativa_nacimiento',
                    id: 'entidad_federativa_nacimiento',
                  }}

                >
                {data.entidades.map(entidad =>
                  <MenuItem key={entidad.cve_ent} value={entidad.cve_ent} >{entidad.nom_ent}</MenuItem>
                )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="select-multiple-checkbox">Nacionalidades</InputLabel>
              <Select
                multiple
                value={data.nacionalidad}
                onChange={handleChange('nacionalidad')}
                input={<Input id="select-multiple-checkbox" />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {data.ciudades.map(ciudad =>
                  <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                    <Checkbox checked={data.nacionalidad.indexOf(ciudad.codigo) > -1} />
                    <ListItemText primary={ciudad.valor} />
                  </MenuItem>
                )}

              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="fecha_nacimiento"
                label="Fecha de nacimiento"
                type="date"
                defaultValue={moment(data.fecha_nacimiento,'DD/MM/YYYY').format("YYYY-MM-DD")}
                format={'DD/MM/YYYY'}
                className={classes.select}
                onChange={handleChange('fecha_nacimiento')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            {/*
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Fecha de nacimiento"
                    className={classes.textField}
                    value={data.fecha_nacimiento}
                    onChange={handleChange('fecha_nacimiento')}
                    margin="normal"
                />
            </Grid>
            */}
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Numero identificacion oficial"
                    className={classes.textField}
                    value={data.numero_identificacion_oficial}
                    onChange={handleChange('numero_identificacion_oficial')}
                    margin="normal"
                />
            </Grid>



            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Correo electrónico personal"
                    className={classes.textField}
                    value={data.correo_electronico.personal}
                    onChange={handleChange('correo_electronico.personal')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Correo electrónico laboral"
                    className={classes.textField}
                    value={data.correo_electronico.laboral}
                    onChange={handleChange('correo_electronico.laboral')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Teléfono personal"
                    className={classes.textField}
                    value={data.telefono.personal}
                    onChange={handleChange('telefono.personal')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="standard-name"
                    label="Teléfono celular"
                    className={classes.textField}
                    value={data.telefono.celular}
                    onChange={handleChange('telefono.celular')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={3} >
              <FormControl className={classes.select} >
                <InputLabel htmlFor="estado_civil">Estado civil</InputLabel>
                <Select
                  value={data.estado_civil.codigo}
                  onChange={handleChangeEdoCivil('estado_civil')}
                  inputProps={{
                    name: 'estado_civil',
                    id: 'estado_civil',
                  }}

                >
                {data.estadosciviles.map(estadocivil =>
                  <MenuItem key={estadocivil.codigo} value={estadocivil.codigo} >{estadocivil.valor}</MenuItem>
                )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3} >
              <FormControl className={classes.select} >
                <InputLabel htmlFor="regimen_matrimonial">Régimen matrimonial</InputLabel>
                <Select
                  value={data.regimen_matrimonial.codigo}
                  onChange={handleChangeRegimen('regimen_matrimonial')}
                  inputProps={{
                    name: 'regimen_matrimonial',
                    id: 'regimen_matrimonial',
                  }}

                >
                {data.regimen.map(regimen =>
                  <MenuItem key={regimen.codigo} value={regimen.codigo} >{regimen.valor}</MenuItem>
                )}
                </Select>
              </FormControl>
            </Grid>
        </Grid>
      </CardContent>



      {/*domicilio*/}
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Domicilio
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={3} >
          <FormControl className={classes.select} >
            <InputLabel htmlFor="dom_pais">País</InputLabel>
            <Select
              value={data.dom_pais.codigo}
              onChange={handleChangeDirPais('dom_pais')}
              inputProps={{
                name: 'dom_pais',
                id: 'dom_pais',
              }}
            >
            {data.ciudades.map(ciudad =>
              <MenuItem key={ciudad.codigo} value={ciudad.codigo} >{ciudad.valor}</MenuItem>
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} >
          <FormControl className={classes.select} >
            <InputLabel htmlFor="dom_entidad_federativa">Entidad federativa</InputLabel>
            <Select
              value={data.dom_entidad_federativa.cve_ent}
              onChange={handleChangeEntidades('dom_entidad_federativa')}
              inputProps={{
                name: 'dom_entidad_federativa',
                id: 'dom_entidad_federativa',
              }}

            >
            {data.entidades.map(entidad =>
              <MenuItem key={entidad.cve_ent} value={entidad.cve_ent} >{entidad.nom_ent}</MenuItem>
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} >
          <FormControl className={classes.select} >
            <InputLabel htmlFor="dom_municipio">Municipio</InputLabel>
            <Select
              value={data.dom_municipio.cve_mun}
              onChange={handleChangeMunicipios('dom_municipio')}
              inputProps={{
                name: 'dom_municipio',
                id: 'dom_municipio',
              }}

            >
            {data.municipios.map(municipios =>
              <MenuItem key={municipios.cve_mun} value={municipios.cve_mun} >{municipios.nom_mun}</MenuItem>
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} >
          <FormControl className={classes.select} >
            <InputLabel htmlFor="dom_localidad">Localidad</InputLabel>
            <Select
              value={data.dom_localidad.cve_loc}
              onChange={handleChangeLocalidades('dom_localidad')}
              inputProps={{
                name: 'dom_localidad',
                id: 'dom_localidad',
              }}

            >
            {data.localidades.map(localidades =>
              <MenuItem key={localidades.cve_loc} value={localidades.cve_loc} >{localidades.nom_loc}</MenuItem>
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
            <TextField
                id="standard-name"
                label="Código postal"
                className={classes.textField}
                value={data.dom_cp}
                onChange={handleChange('dom_cp')}
                margin="normal"
            />
        </Grid>
        <Grid item xs={3} >
          <FormControl className={classes.select} >
            <InputLabel htmlFor="dom_vialidad">Tipo de vía</InputLabel>
            <Select
              value={data.dom_vialidad.codigo}
              onChange={handleChangeTipoVialidad('dom_vialidad')}
              inputProps={{
                name: 'dom_vialidad',
                id: 'dom_vialidad',
              }}

            >
            {data.tipovialidad.map(tipovialidad =>
              <MenuItem key={tipovialidad.codigo} value={tipovialidad.codigo} >{tipovialidad.valor}</MenuItem>
            )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
            <TextField
                id="standard-name"
                label="Nombre de la vía"
                className={classes.textField}
                value={data.dom_vialidad.nom_vial}
                onChange={handleChangeNombreVialidad()}
                margin="normal"
            />
        </Grid>
        <Grid item xs={3}>
            <TextField
                id="standard-name"
                label="Número exterior"
                className={classes.textField}
                value={data.dom_numExt}
                onChange={handleChange('dom_numExt')}
                margin="normal"
            />
        </Grid>
        <Grid item xs={3}>
            <TextField
                id="standard-name"
                label="Número interior"
                className={classes.textField}
                value={data.dom_numInt}
                onChange={handleChange('dom_numInt')}
                margin="normal"
            />
        </Grid>
      </Grid>
      </CardContent>
      {/*fin domicilio*/}
      <CardActions>
        <Button variant="contained" size="small" onClick={handleClick()}>Guardar</Button>
        <div id="messages" className={data.type}>{data.message}</div>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
