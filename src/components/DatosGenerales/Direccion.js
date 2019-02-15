import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  select: {
    marginTop: 15,
    width: "90%"
  },
  textField: {
    width: "90%"
  }
});

function FullWidthGrid(props) {
  const {
    classes,
    data,
    ciudades,
    entidades,
    municipios,
    localidades,
    tipovialidad,
    handleChange
  } = props;

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={3}>
        <FormControl className={classes.select}>
          <InputLabel htmlFor="pais">País de Residencia</InputLabel>
          <Select value={data.pais.codigo} onChange={handleChange("pais")}>
            {ciudades.map(ciudad => (
              <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                {ciudad.valor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="entidad_federativa">
              Entidad federativa
            </InputLabel>
            <Select
              value={data.entidad_federativa.cve_ent}
              onChange={handleChange("entidad_federativa")}
              inputProps={{
                name: "entidad_federativa",
                id: "entidad_federativa"
              }}
            >
              {entidades.map(entidad => (
                <MenuItem key={entidad.cve_ent} value={entidad.cve_ent}>
                  {entidad.nom_ent}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="municipio">Municipio</InputLabel>
            <Select
              value={data.municipio.cve_mun}
              onChange={handleChange("municipio")}
            >
              {municipios.map(municipios => (
                <MenuItem key={municipios.cve_mun} value={municipios.cve_mun}>
                  {municipios.nom_mun}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="localidad">Localidad</InputLabel>
            <Select
              value={data.localidad.cve_loc}
              onChange={handleChange("localidad")}
            >
              {localidades.map(localidades => (
                <MenuItem key={localidades.cve_loc} value={localidades.cve_loc}>
                  {localidades.nom_loc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <TextField
            id="standard-name"
            label="Código postal"
            className={classes.textField}
            value={data.cp}
            onChange={handleChange("cp")}
            margin="normal"
          />
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="vialidad">Tipo de vialidad</InputLabel>
            <Select
              value={data.vialidad.tipo_vial}
              onChange={handleChange("vialidad.tipo_vial")}
              inputProps={{
                name: "vialidad",
                id: "vialidad"
              }}
            >
              {tipovialidad.map(tipovialidad => (
                <MenuItem key={tipovialidad.codigo} value={tipovialidad.codigo}>
                  {tipovialidad.valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <TextField
            id="standard-name"
            label="Nombre de la vialidad"
            className={classes.textField}
            value={data.vialidad.nom_vial}
            onChange={handleChange("vialidad.nom_vial")}
            margin="normal"
          />
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <TextField
            id="standard-name"
            label="Número exterior"
            className={classes.textField}
            value={data.numExt}
            onChange={handleChange("numExt")}
            margin="normal"
          />
        </Grid>
      )}
      {data.pais.codigo === "MX" && (
        <Grid item xs={3}>
          <TextField
            id="standard-name"
            label="Número interior"
            className={classes.textField}
            value={data.numInt}
            onChange={handleChange("numInt")}
            margin="normal"
          />
        </Grid>
      )}
    </Grid>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
