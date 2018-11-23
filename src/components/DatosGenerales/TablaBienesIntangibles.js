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
            <CustomTableCell>Propietario registrado</CustomTableCell>
            <CustomTableCell>Descripción</CustomTableCell>
            <CustomTableCell>Ente Público encargado del registro</CustomTableCell>
            <CustomTableCell>Número de registro</CustomTableCell>
            <CustomTableCell>Fecha de registro</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Precio de adquisición</CustomTableCell>
            <CustomTableCell>Forma de adquisición</CustomTableCell>
            <CustomTableCell>Fecha de vencimiento</CustomTableCell>
            <CustomTableCell>Porcentaje de propiedad en caso de copropiedad</CustomTableCell>
            <CustomTableCell>Precio total de adquisición en caso de copropiedad</CustomTableCell>
            <CustomTableCell>Nombre, denominación o razón social del copropietario</CustomTableCell>
            <CustomTableCell>Porcentaje de propiedad del copropietario</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_operacion.valor}</CustomTableCell>
                <CustomTableCell>{item.propietario_registrado}</CustomTableCell>
                <CustomTableCell>{item.descripcion}</CustomTableCell>
                <CustomTableCell>{item.ente_publico_encargado.nombres}</CustomTableCell>
                <CustomTableCell>{item.numero_registro}</CustomTableCell>
                <CustomTableCell>{item.fecha_registro}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.precio_adquisicion.valor}</CustomTableCell>
                <CustomTableCell>{item.forma_adquisicion.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_vencimiento}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_copropiedad}</CustomTableCell>
                <CustomTableCell>{item.precio_total_copropiedad.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre_copropietario}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_propiedad_copropietario}</CustomTableCell>
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
