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
            <CustomTableCell>Tipo de inversión</CustomTableCell>
            <CustomTableCell>Tipo específico de la inversión</CustomTableCell>
            <CustomTableCell>Número de cuenta, contrato o identificador de la inversión</CustomTableCell>
            <CustomTableCell>Nacional o extranjero</CustomTableCell>
            <CustomTableCell>Nombre de la institución</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Domicilio</CustomTableCell>
            <CustomTableCell>Forma de adquisición</CustomTableCell>
            <CustomTableCell>Fecha de inicio</CustomTableCell>
            <CustomTableCell>Monto original</CustomTableCell>
            <CustomTableCell>Tipo de moneda</CustomTableCell>
            <CustomTableCell>Tasa de interés</CustomTableCell>
            <CustomTableCell>Saldo al año que se reporta</CustomTableCell>
            <CustomTableCell>Plazo</CustomTableCell>
            <CustomTableCell>Unidad de medida del plazo</CustomTableCell>
            <CustomTableCell>Titular</CustomTableCell>
            <CustomTableCell>Porcentaje de la inversión</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_operacion.valor}</CustomTableCell>
                <CustomTableCell>{item.tipo_inversion.valor}</CustomTableCell>
                <CustomTableCell>{item.tipo_especifico_inversion.valor}</CustomTableCell>
                <CustomTableCell>{item.numero_cuenta}</CustomTableCell>
                <CustomTableCell>{item.nacional_extranjero.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre_institucion}</CustomTableCell>
                <CustomTableCell>{item.rfc_institucion}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.domicilio_institucion.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.forma_adquisicion.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_inicio} </CustomTableCell>
                <CustomTableCell>{item.monto_original}</CustomTableCell>
                <CustomTableCell>{item.tipo_moneda.moneda}</CustomTableCell>
                <CustomTableCell>{item.tasa_interes}</CustomTableCell>
                <CustomTableCell>{item.saldo_anual}</CustomTableCell>
                <CustomTableCell>{item.plazo}</CustomTableCell>
                <CustomTableCell>{item.unidad_medida_plazo.valor}</CustomTableCell>
                <CustomTableCell>{item.titular_bien.valor}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_inversion}</CustomTableCell>           <CustomTableCell>{item.observaciones}</CustomTableCell>
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
