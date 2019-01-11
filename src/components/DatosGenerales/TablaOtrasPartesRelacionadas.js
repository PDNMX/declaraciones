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
            <CustomTableCell>Tipo de relación con el Titular</CustomTableCell>
            <CustomTableCell>Nombre o denominación social de la parte relacionada</CustomTableCell>
            <CustomTableCell>Fecha de inicio/Constitución de la relación</CustomTableCell>
            <CustomTableCell>Nacionalidades</CustomTableCell>
            <CustomTableCell>CURP</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>Fecha de nacimiento</CustomTableCell>
            <CustomTableCell>Ocupación/Profesión</CustomTableCell>
            <CustomTableCell>¿Tiene la parte relacionada intereses en el mismo sector/industria al que pertenece el empleo oficial del Declarante?</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Observaciones</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.tipo_relacion}</CustomTableCell>
                <CustomTableCell>{item.nombre_denominacion_parte}</CustomTableCell>
                <CustomTableCell>{item.fecha_inicio_relacion}</CustomTableCell>
                <CustomTableCell>{item.nacionalidades[0].valor}</CustomTableCell>
                <CustomTableCell>{item.curp}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.fecha_nacimiento}</CustomTableCell>
                <CustomTableCell>{item.ocupacion}</CustomTableCell>
                <CustomTableCell>{item.tiene_interes}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
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
