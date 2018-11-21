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
            <CustomTableCell>Nombre de la empresa, sociedad o asociación</CustomTableCell>
            <CustomTableCell>Pais</CustomTableCell>
            <CustomTableCell>Fecha de constitución</CustomTableCell>
            <CustomTableCell>Numero de registro</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>Rol en la empresa, sociedad o asociación</CustomTableCell>
            <CustomTableCell>¿Tiene actividad económica?</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Porcentaje de participación</CustomTableCell>
            <CustomTableCell>Domicilio</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_empresa_sociedad_asociacion}</CustomTableCell>
                <CustomTableCell>{item.pais_registro.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_constitucion}</CustomTableCell>
                <CustomTableCell>{item.numero_registro}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.rol}</CustomTableCell>
                <CustomTableCell>{item.actividad_economica}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_participacion}</CustomTableCell>
                <CustomTableCell>{item.domicilio.pais.valor}</CustomTableCell>
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
