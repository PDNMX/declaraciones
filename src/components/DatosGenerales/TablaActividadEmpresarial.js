import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function CustomizedTable(props) {
  const { classes, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nombre, denominación o razón social</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>CURP</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Tipo de actividad</CustomTableCell>
            <CustomTableCell>Descripción de la actividad</CustomTableCell>
            <CustomTableCell>Domicilio</CustomTableCell>
            <CustomTableCell>Ingreso bruto anual</CustomTableCell>
            <CustomTableCell>Moneda</CustomTableCell>
            <CustomTableCell>Frecuencia</CustomTableCell>
            <CustomTableCell>Duración</CustomTableCell>
            <CustomTableCell>Fecha de Pago</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_denominacion_razon_social}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.curp}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.tipo_actividad_servicio.valor}</CustomTableCell>
                <CustomTableCell>{item.descripcion_actividad_servicio}</CustomTableCell>
                <CustomTableCell>{item.domicilio_actividad_empresarial.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.ingreso_bruto_anual.valor}</CustomTableCell>
                <CustomTableCell>{item.ingreso_bruto_anual.moneda.moneda}</CustomTableCell>
                <CustomTableCell>{item.ingreso_bruto_anual.unidad_temporal.valor}</CustomTableCell>
                <CustomTableCell>{item.ingreso_bruto_anual.duracion_frecuencia}</CustomTableCell>
                <CustomTableCell>{item.ingreso_bruto_anual.fecha_transaccion}</CustomTableCell>
                <CustomTableCell>{item.observaciones}</CustomTableCell>
                <CustomTableCell />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
