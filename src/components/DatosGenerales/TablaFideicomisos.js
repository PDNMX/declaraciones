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
            <CustomTableCell>Tipo de operación</CustomTableCell>
            <CustomTableCell>Nombre o identificador del fideicomiso</CustomTableCell>
            <CustomTableCell>Tipo del fideicomiso</CustomTableCell>
            <CustomTableCell>Objetivo del fideicomiso</CustomTableCell>
            <CustomTableCell>Número de registro o identificador</CustomTableCell>
            <CustomTableCell>Fecha de creación del fideicomiso</CustomTableCell>
            <CustomTableCell>Vigencia del fideicomiso</CustomTableCell>
            <CustomTableCell>Residencia del fideicomiso</CustomTableCell>
            <CustomTableCell>Valor del fideicomiso</CustomTableCell>
            <CustomTableCell>Moneda del fideicomiso</CustomTableCell>
            <CustomTableCell>Porcentaje propiedad/Derechos fiduciarios</CustomTableCell>
            <CustomTableCell>Ingreso monetario que obtiene del fideicomiso</CustomTableCell>
            <CustomTableCell>Institución fiduciaria</CustomTableCell>
            <CustomTableCell>Nombre, denominación o razón social del fideicomitente, fideicomisario, fiduciario</CustomTableCell>
            <CustomTableCell>RFC del fideicomitente, fideicomisario, fiduciario</CustomTableCell>
            <CustomTableCell>CURP del fideicomitente, fideicomisario, fiduciario</CustomTableCell>
            <CustomTableCell>Domicilio de fideicomitente, fideicomisario, fiduciario</CustomTableCell>
            <CustomTableCell>Fecha de nacimiento o de constitución del fideicomitente, fideicomisario, fiduciario</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_operacion.valor}</CustomTableCell>
                <CustomTableCell>{item.identificador_fideicomiso}</CustomTableCell>
                <CustomTableCell>{item.tipo_fideicomiso.valor}</CustomTableCell>
                <CustomTableCell>{item.objetivo}</CustomTableCell>
                <CustomTableCell>{item.numero_registro}</CustomTableCell>
                <CustomTableCell>{item.fecha_creacion}</CustomTableCell>
                <CustomTableCell>{item.vigencia}</CustomTableCell>
                <CustomTableCell>{item.residencia.valor}</CustomTableCell>
                <CustomTableCell>{item.valor}</CustomTableCell>
                <CustomTableCell>{item.moneda.moneda}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_propiedad_derechos_fiduciarios}</CustomTableCell>
                <CustomTableCell>{item.ingreso_monetario_obtenido}</CustomTableCell>
                <CustomTableCell>{item.institucion_fiduciaria}</CustomTableCell>
                <CustomTableCell>{item.fideicomitente.nombre}</CustomTableCell>
                <CustomTableCell>{item.fideicomitente.rfc}</CustomTableCell>
                <CustomTableCell>{item.fideicomitente.curp}</CustomTableCell>
                <CustomTableCell>{item.fideicomitente.domicilio.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.fideicomitente.fecha_constitucion}</CustomTableCell>
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
