import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
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
  const { classes, data, buttonClick } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>

            <CustomTableCell>Tipo de operación</CustomTableCell>
            <CustomTableCell>Tipo de acreedor</CustomTableCell>
            <CustomTableCell>Tipo de adeudo</CustomTableCell>
            <CustomTableCell>Número de cuenta, contrato o identificador de la deuda</CustomTableCell>
            <CustomTableCell>Nacional o extranjero</CustomTableCell>
            <CustomTableCell>Nombre, denominación o razón social del acreedor</CustomTableCell>
            <CustomTableCell>RFC del acreedor</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Domicilio del acreedor</CustomTableCell>
            <CustomTableCell>Fecha en la que se generó el adeudo</CustomTableCell>
            <CustomTableCell>Monto original del adeudo</CustomTableCell>
            <CustomTableCell>Tipo de moneda</CustomTableCell>
            <CustomTableCell>Tasa de interés</CustomTableCell>
            <CustomTableCell>Saldo pendiente</CustomTableCell>
            <CustomTableCell>Montos abonados a favor de la deuda</CustomTableCell>
            <CustomTableCell>Plazo del adeudo</CustomTableCell>
            <CustomTableCell>Unidad de medida del plazo</CustomTableCell>
            <CustomTableCell>Titular</CustomTableCell>
            <CustomTableCell>Porcentaje del adeudo del titular</CustomTableCell>
            <CustomTableCell>¿Se otorgó garantía?</CustomTableCell>
            <CustomTableCell>Nombre, denominación o razón social del garante</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_operacion.valor}</CustomTableCell>
                <CustomTableCell>{item.tipo_acreedor.valor}</CustomTableCell>
                <CustomTableCell>{item.tipo_adeudo.valor}</CustomTableCell>
                <CustomTableCell>{item.identificador_deuda}</CustomTableCell>
                <CustomTableCell>{item.nacional_extranjero.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre_acreedor}</CustomTableCell>
                <CustomTableCell>{item.rfc_acreedor}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.domicilio_acreedor.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_adeudo}</CustomTableCell>
                <CustomTableCell>{item.monto_original}</CustomTableCell>
                <CustomTableCell>{item.tipo_moneda.moneda}</CustomTableCell>
                <CustomTableCell>{item.tasa_interes}</CustomTableCell>
                <CustomTableCell>{item.saldo_pendiente}</CustomTableCell>
                <CustomTableCell>{item.montos_abonados[0]}</CustomTableCell>
                <CustomTableCell>{item.plazo_adeudo}</CustomTableCell>
                <CustomTableCell>{item.unidad_medida_adeudo.valor}</CustomTableCell>
                <CustomTableCell>{item.titularidad_deuda.valor}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_adeudo_titular}</CustomTableCell>
                <CustomTableCell>{item.garantia}</CustomTableCell>
                <CustomTableCell>{item.nombre_garante}</CustomTableCell>
                <CustomTableCell>{item.observaciones}</CustomTableCell>
                  <CustomTableCell>
                    <Button
                      variant="contained"
                      size="small"
                      value={index}
                      onClick={buttonClick(index)}
                    >
                      Eliminar
                    </Button>
                  </CustomTableCell>
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
