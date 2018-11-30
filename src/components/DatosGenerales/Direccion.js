import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  select: {
    //minWidth: 335,
    marginTop: 15,
    width: "100%"
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
    direccion,
    handleChange
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Domicilio
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="pais">País</InputLabel>
            <Select
              value={data.pais.codigo}
              onChange={handleChange("pais")}
              inputProps={{
                name: "pais",
                id: "pais"
              }}
            >
              {ciudades.map(ciudad => (
                <MenuItem key={ciudad.codigo} value={ciudad.codigo}>
                  {ciudad.valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {data.pais.codigo === "MX" && (
          <Grid item xs={2}>
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
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="municipio">Municipio</InputLabel>
              <Select
                value={data.municipio.cve_mun}
                onChange={handleChange("municipio")}
                inputProps={{
                  name: "municipio",
                  id: "municipio"
                }}
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
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="localidad">Localidad</InputLabel>
              <Select
                value={data.localidad.cve_loc}
                onChange={handleChange("localidad")}
                inputProps={{
                  name: "localidad",
                  id: "localidad"
                }}
              >
                {localidades.map(localidades => (
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
        )}
        {data.pais.codigo === "MX" && (
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
                {tipovialidad.map(tipovialidad => (
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
        )}
        {data.pais.codigo === "MX" && (
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
