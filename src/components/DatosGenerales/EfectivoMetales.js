import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Tabla from "./TablaEfectivoMetales";

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
// import Checkbox from "@material-ui/core/Checkbox";
// import ListItemText from "@material-ui/core/ListItemText";
/*Multiselect*/

// import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  const {
    classes,
    data,
    handleClickEfectivoMetales,
    handleChange,

  } = props;

  // console.log(data);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Efectivo y metales
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="tipo_operacion">Tipo de operación</InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChange("tipo_operacion")}
              inputProps={{
                name: "tipo_operacion",
                id: "tipo_operacion"
              }}
            >
              {data.catTipoOperacion.map(tipoOperacion => (
                <MenuItem key={tipoOperacion.codigo} value={tipoOperacion.codigo}>
                  {tipoOperacion.valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="tipo_moneda">
              Tipo de moneda
            </InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChange("tipo_moneda")}
              inputProps={{
                name: "tipo_moneda",
                id: "tipo_moneda"
              }}
            >
              {data.catTiposMonedas.map(tipoMoneda => (
                <MenuItem key={tipoMoneda.codigo} value={tipoMoneda.codigo}>
                  {tipoMoneda.valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Monto "
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.select}>
            <InputLabel htmlFor="tipo_metal">
              Tipo de metal
            </InputLabel>
            <Select
              value={data.estado_civil.codigo}
              onChange={handleChange("tipo_metal")}
              inputProps={{
                name: "tipo_metal",
                id: "tipo_metal"
              }}
            >
              {data.catTiposMetales.map(tipoMetal => (
                <MenuItem key={tipoMetal.codigo} value={tipoMetal.codigo}>
                  {tipoMetal.valor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Unidades"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="grado"
            label="Monto en pesos"
            className={classes.textField}
            value={data.grado_obtenido}
            margin="normal"
          />
        </Grid>














          <Grid item xs={2}>
            <FormControl className={classes.select}>
              <InputLabel htmlFor="forma_adquisicion">Forma de adquisición</InputLabel>
              <Select
                value={data.estado_civil.codigo}
                onChange={handleChange("forma_adquisicion")}
                inputProps={{
                  name: "forma_adquisicion",
                  id: "forma_adquisicion"
                }}
              >
                {data.catFormaAdquision.map(formaAdquision => (
                  <MenuItem key={formaAdquision.codigo} value={formaAdquision.codigo}>
                    {formaAdquision.valor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleClickEfectivoMetales()}
            >
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Tabla data={data.efectivo_metales} />
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
