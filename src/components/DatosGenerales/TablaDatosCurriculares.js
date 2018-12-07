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
            <CustomTableCell>Grado Obtenido</CustomTableCell>
            <CustomTableCell>Institución Educativa</CustomTableCell>
            <CustomTableCell>Pais</CustomTableCell>
            <CustomTableCell>Entidad</CustomTableCell>
            <CustomTableCell>Carrera</CustomTableCell>
            <CustomTableCell>Estatus</CustomTableCell>
            <CustomTableCell>Año de Conclusión</CustomTableCell>
            <CustomTableCell>Documento Obtenido</CustomTableCell>
            <CustomTableCell>Cedula Profesional</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((grado, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>
                  {index}-{grado.grado_obtenido}
                </CustomTableCell>
                <CustomTableCell>{grado.institucion_educativa}</CustomTableCell>
                <CustomTableCell>
                  {grado.lugar_institucion_educativa.pais.valor}
                </CustomTableCell>
                <CustomTableCell>
                  {grado.lugar_institucion_educativa.entidad.nom_ent}
                </CustomTableCell>
                <CustomTableCell>{grado.carrera}</CustomTableCell>
                <CustomTableCell>{grado.estatus.valor}</CustomTableCell>
                <CustomTableCell>{grado.ano_conclusion}</CustomTableCell>
                <CustomTableCell>
                  {grado.documento_obtenido.valor}
                </CustomTableCell>
                <CustomTableCell>{grado.cedula_profesional}</CustomTableCell>
                <CustomTableCell>
                  <Button
                    variant="contained"
                    size="small"
                    value={index}
                    onClick={buttonClick()}
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
