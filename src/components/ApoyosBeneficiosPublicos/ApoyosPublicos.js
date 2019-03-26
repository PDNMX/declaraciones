import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaApoyosPublicos";

import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";

/*select*/
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/*select*/

/*Multiselect*/
// import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

import FormControlLabel from "@material-ui/core/FormControlLabel";

// data picker
// import moment from "moment";

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

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Apoyos o beneficios públicos monetarios o en especie
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <br />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.datos_apoyos_beneficios_publicos.es_beneficiario}
                  value="Habita el domicilio del declarante"
                  onChange={handleChange("es_beneficiario")}
                  color="primary"
                />
              }
              label="¿Es beneficiario de algún programa público?"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Nombre del programa"
              className={classes.textField}
              value={data.datos_apoyos_beneficios_publicos.programa}
              onChange={handleChange("programa")}
              margin="normal"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Institución que otorga el apoyo"
              className={classes.textField}
              value={data.datos_apoyos_beneficios_publicos.institucion_otorgante}
              onChange={handleChange("institucion_otorgante")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="nivel_gobierno">
                Nivel de gobierno
              </InputLabel>
              <Select
                value={data.datos_apoyos_beneficios_publicos.nivel_orden_gobierno.codigo}
                onChange={handleChange("nivel_orden_gobierno")}
                inputProps={{
                  name: "nivel_gobierno",
                  id: "nivel_gobierno"
                }}
              >
                {data.catNivelGobierno.map(nivelGobierno => (
                  <MenuItem
                    key={nivelGobierno.codigo}
                    value={nivelGobierno.codigo}
                  >
                    {nivelGobierno.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="tipo_apoyo">Tipo de apoyo</InputLabel>
              <Select
                value={data.datos_apoyos_beneficios_publicos.tipo_apoyo.codigo}
                onChange={handleChange("tipo_apoyo")}
                inputProps={{
                  name: "tipo_apoyo",
                  id: "tipo_apoyo"
                }}
              >
                {data.catTipoApoyo.map(tipoApoyo => (
                  <MenuItem key={tipoApoyo.codigo} value={tipoApoyo.codigo}>
                    {tipoApoyo.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Valor anual del apoyo"
              className={classes.textField}
              value={data.datos_apoyos_beneficios_publicos.valor_anual_apoyo}
              onChange={handleChange("valor_anual_apoyo")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id="grado"
              label="Observaciones"
              className={classes.textField}
              value={data.datos_apoyos_beneficios_publicos.observaciones}
              onChange={handleChange("observaciones")}
              margin="normal"
              multiline={true}
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
            data={data.apoyos_beneficios_publicos}
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
