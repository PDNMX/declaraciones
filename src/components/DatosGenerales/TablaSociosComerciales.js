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
            <CustomTableCell>Nombre de la actividad comercial vinculante</CustomTableCell>
            <CustomTableCell>Tipo de vinculo</CustomTableCell>
            <CustomTableCell>Antiguedad del vinculo</CustomTableCell>
            <CustomTableCell>RFC de la entidad</CustomTableCell>
            <CustomTableCell>Nombre del socio comercial</CustomTableCell>
            <CustomTableCell>CURP del socio</CustomTableCell>
            <CustomTableCell>RFC del socio</CustomTableCell>
            <CustomTableCell>Nacionalidad</CustomTableCell>
            <CustomTableCell>Entidad</CustomTableCell>
            <CustomTableCell>Fecha de nacimiento del socio</CustomTableCell>
            <CustomTableCell>Porcentaje de participacion del socio</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Observaciones</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_actividad}</CustomTableCell>
                <CustomTableCell>{item.tipo_vinculo}</CustomTableCell>
                <CustomTableCell>{item.antiguedad_vinculo}</CustomTableCell>
                <CustomTableCell>{item.rfc_entidad}</CustomTableCell>
                <CustomTableCell>{item.nombre}</CustomTableCell>
                <CustomTableCell>{item.curp}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.lugar_nacimiento.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.lugar_nacimiento.entidad.valor}</CustomTableCell>
                <CustomTableCell>{item.fecha_nacimiento}</CustomTableCell>
                <CustomTableCell>{item.porcentaje_participacion}</CustomTableCell>
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
