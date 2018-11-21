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
            <CustomTableCell>Ambito</CustomTableCell>
            <CustomTableCell>Nivel de gobierno</CustomTableCell>
            <CustomTableCell>Nombre de la institución</CustomTableCell>
            <CustomTableCell>Unidad administrativa</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Poder Juridico</CustomTableCell>
            <CustomTableCell>Cargo/Puesto</CustomTableCell>
            <CustomTableCell>Fecha de ingreso</CustomTableCell>
            <CustomTableCell>Fecha salida</CustomTableCell>
            <CustomTableCell>Funciones</CustomTableCell>
            <CustomTableCell>Dirección</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.ambito.valor}</CustomTableCell>
                <CustomTableCell>{item.nivel_gobierno.valor}</CustomTableCell>
                <CustomTableCell>{item.nombre_institucion}</CustomTableCell>
                <CustomTableCell>{item.unidad_administrativa}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.poder_ente.valor}</CustomTableCell>
                <CustomTableCell>{item.cargo_puesto}</CustomTableCell>
                <CustomTableCell>{item.fecha_ingreso}</CustomTableCell>
                <CustomTableCell>{item.fecha_salida}</CustomTableCell>
                <CustomTableCell>{item.funciones_principales[0].valor}</CustomTableCell>
                <CustomTableCell>{item.direccion.pais.valor}</CustomTableCell>
                <CustomTableCell></CustomTableCell>
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
