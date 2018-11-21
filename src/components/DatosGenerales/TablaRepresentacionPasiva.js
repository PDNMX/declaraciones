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
            <CustomTableCell>Tipo de representación activa</CustomTableCell>
            <CustomTableCell>Nombre completo</CustomTableCell>
            <CustomTableCell>Fecha de inicio</CustomTableCell>
            <CustomTableCell>Nacionalidades</CustomTableCell>
            <CustomTableCell>CURP</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>Fecha de nacimiento</CustomTableCell>
            <CustomTableCell>Ocupación/Profesión</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>¿Tiene el representante intereses en el mismo sector/industria al que pertenece el empleo oficial del Declarante?</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_representacion.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre}</CustomTableCell>
                <CustomTableCell>{item.fecha_inicio_representacion}</CustomTableCell>
                <CustomTableCell>{item.nacionalidades[0].valor}</CustomTableCell>
                <CustomTableCell>{item.curp}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.fecha_nacimiento}</CustomTableCell>
                <CustomTableCell>{item.ocupacion_profesion}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.tiene_interes}</CustomTableCell>
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
