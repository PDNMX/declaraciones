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
    catPaises,
    catEntidadesFederativas,
    catMunicipios,
    catLocalidades,
    catTipoVialidad,
    handleChange
  } = props;

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={3}>
        <FormControl className={classes.select}>
          <InputLabel htmlFor="pais">País</InputLabel>
          <Select value={data.pais.codigo} onChange={handleChange("pais")}>
            {catPaises.map(ciudad => (
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
              value={data.entidad_federativa.cve_agee}
              onChange={handleChange("entidad_federativa")}
              inputProps={{
                name: "entidad_federativa",
                id: "entidad_federativa"
              }}
            >
              {catEntidadesFederativas.map(entidad => (
                <MenuItem key={entidad.cve_agee} value={entidad.cve_agee}>
                  {entidad.nom_agee}
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
              value={data.municipio.cve_agem}
              onChange={handleChange("municipio")}
            >
              {catMunicipios.map(catMunicipios => (
                <MenuItem
                  key={catMunicipios.cve_agem}
                  value={catMunicipios.cve_agem}
                >
                  {catMunicipios.nom_agem}
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
              {catLocalidades.map(catLocalidades => (
                <MenuItem
                  key={catLocalidades.cve_loc}
                  value={catLocalidades.cve_loc}
                >
                  {catLocalidades.nom_loc}
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
            <InputLabel htmlFor="vialidad">Tipo de vía</InputLabel>
            <Select
              value={data.vialidad.tipo_vial}
              onChange={handleChange("vialidad.tipo_vial")}
              inputProps={{
                name: "vialidad",
                id: "vialidad"
              }}
            >
              {catTipoVialidad.map(catTipoVialidad => (
                <MenuItem
                  key={catTipoVialidad.codigo}
                  value={catTipoVialidad.codigo}
                >
                  {catTipoVialidad.valor}
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
            label="Nombre de la vía"
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
