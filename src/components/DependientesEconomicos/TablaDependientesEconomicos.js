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
            <CustomTableCell>Nombre completo</CustomTableCell>
            <CustomTableCell>Tipo de relación</CustomTableCell>
            <CustomTableCell>Nacionalidades</CustomTableCell>
            <CustomTableCell>CURP</CustomTableCell>
            <CustomTableCell>RFC</CustomTableCell>
            <CustomTableCell>Fecha de nacimiento</CustomTableCell>
            <CustomTableCell>Número de identificación nacional</CustomTableCell>
            <CustomTableCell>Habital en el domicilio</CustomTableCell>
            <CustomTableCell>Domicilio</CustomTableCell>
            <CustomTableCell>Medio de Contacto</CustomTableCell>
            <CustomTableCell>Ingresos propios</CustomTableCell>
            <CustomTableCell>Ocupación/Profesión</CustomTableCell>
            <CustomTableCell>Sector/Industria</CustomTableCell>
            <CustomTableCell>Proveedor/Contratista</CustomTableCell>
            <CustomTableCell>Intereses en el mismo sector</CustomTableCell>
            <CustomTableCell>Actividades cabildeo en el mismo sector/industria</CustomTableCell>
            <CustomTableCell>Beneficiario de programas</CustomTableCell>
            <CustomTableCell>Observaciones/Comentarios</CustomTableCell>
            <CustomTableCell>Opciones</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell>{index}-{item.nombre_personal.nombres} {item.nombre_personal.primer_apellido} {item.nombre_personal.segundo_apellido}</CustomTableCell>
                <CustomTableCell>{item.tipo_relacion.valor}</CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell>{item.curp}</CustomTableCell>
                <CustomTableCell>{item.rfc}</CustomTableCell>
                <CustomTableCell>{item.fecha_nacimiento}</CustomTableCell>
                <CustomTableCell>{item.numero_identificacion_nacional}</CustomTableCell>
                <CustomTableCell>{item.habita_domicilio_declarante}</CustomTableCell>
                <CustomTableCell>{item.domicilio.pais.valor}</CustomTableCell>
                <CustomTableCell>{item.medio_contacto}</CustomTableCell>
                <CustomTableCell>{item.ingresos_propios}</CustomTableCell>
                <CustomTableCell>{item.ocupacion_profesion}</CustomTableCell>
                <CustomTableCell>{item.sector_industria.valor}</CustomTableCell>
                <CustomTableCell>{item.proveedor_contratista_gobierno}</CustomTableCell>
                <CustomTableCell>{item.tiene_intereses_mismo_sector_declarante}</CustomTableCell>
                <CustomTableCell>{item.desarrolla_cabildeo_sector_declarante.respuesta===true?item.desarrolla_cabildeo_sector_declarante.observaciones:''}</CustomTableCell>
                <CustomTableCell></CustomTableCell>
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
