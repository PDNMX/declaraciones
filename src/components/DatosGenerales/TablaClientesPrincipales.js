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
            <CustomTableCell>Nombre o naturaleza del negocio/Actividad lucrativa</CustomTableCell>
            <CustomTableCell>Número de registro</CustomTableCell>
            <CustomTableCell>Dueño o encargado del negocio/Actividad lucrativa</CustomTableCell>
            <CustomTableCell>Nombre o denominación social del cliente principal del negocio o actividad lucrativa</CustomTableCell>
            <CustomTableCell>RFC del cliente principal</CustomTableCell>
            <CustomTableCell>Domicilio del cliente principal</CustomTableCell>
            <CustomTableCell>Sector / Industria</CustomTableCell>
            <CustomTableCell>Porcentaje de facturación total que representa el cliente</CustomTableCell>
            <CustomTableCell>Observaciones</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_negocio}</CustomTableCell>
                <CustomTableCell>{item.numero_Registro}</CustomTableCell>
                <CustomTableCell>{item.dueno_encargado}</CustomTableCell>
                <CustomTableCell>{item.nombre}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.domicilio.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_participacion}</CustomTableCell>
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
