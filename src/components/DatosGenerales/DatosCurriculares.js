import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaDatosCurriculares";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

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

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Datos Curriculares
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <TextField
              label="Grado académico obtenido"
              className={classes.textField}
              value={data.datos_curriculares_grados_academicos.grado_obtenido}
              onChange={handleChange(
                "datos_curriculares_grados_academicos.grado_obtenido"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Institucion Educativa"
              className={classes.textField}
              value={
                data.datos_curriculares_grados_academicos.institucion_educativa
              }
              onChange={handleChange(
                "datos_curriculares_grados_academicos.institucion_educativa"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Pais</InputLabel>
              <Select
                value={
                  data.datos_curriculares_grados_academicos
                    .lugar_institucion_educativa.pais.codigo
                }
                onChange={handleChange(
                  "datos_curriculares_grados_academicos.lugar_institucion_educativa.pais"
                )}
              >
                {data.ciudades.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {data.datos_curriculares_grados_academicos.lugar_institucion_educativa
            .pais.codigo === "MX" && (
            <Grid item xs={2}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="estado_civil">Entidad</InputLabel>
                <Select
                  value={
                    data.datos_curriculares_grados_academicos
                      .lugar_institucion_educativa.entidad.cve_ent
                  }
                  onChange={handleChange(
                    "datos_curriculares_grados_academicos.lugar_institucion_educativa.entidad"
                  )}
                >
                  {data.entidades.map(dato => (
                    <MenuItem key={dato.cve_ent} value={dato.cve_ent}>
                      {dato.nom_ent}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={2}>
            <TextField
              label="Carrera"
              className={classes.textField}
              value={data.datos_curriculares_grados_academicos.carrera}
              onChange={handleChange(
                "datos_curriculares_grados_academicos.carrera"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Estatus</InputLabel>
              <Select
                value={data.datos_curriculares_grados_academicos.estatus.codigo}
                onChange={handleChange(
                  "datos_curriculares_grados_academicos.estatus"
                )}
              >
                {data.estatusEstudio.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Año de Conclusión"
              className={classes.textField}
              value={data.datos_curriculares_grados_academicos.ano_conclusion}
              onChange={handleChange(
                "datos_curriculares_grados_academicos.ano_conclusion"
              )}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="estado_civil">Documento Obtenido</InputLabel>
              <Select
                value={
                  data.datos_curriculares_grados_academicos.documento_obtenido
                    .codigo
                }
                onChange={handleChange(
                  "datos_curriculares_grados_academicos.documento_obtenido"
                )}
              >
                {data.documentoObtenido.map(dato => (
                  <MenuItem key={dato.codigo} value={dato.codigo}>
                    {dato.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Cedula Profesional"
              className={classes.textField}
              value={
                data.datos_curriculares_grados_academicos.cedula_profesional
              }
              onChange={handleChange(
                "datos_curriculares_grados_academicos.cedula_profesional"
              )}
              margin="normal"
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
            data={data.curriculares_grados_academicos}
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
