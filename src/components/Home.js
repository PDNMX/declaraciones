import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = {
  card: {
    minWidth: 275,
    margin: 10
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          />
          <Typography className={classes.pos} color="textSecondary">
            Declaraciones presentadas o en proceso
          </Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>ID</CustomTableCell>
                <CustomTableCell>Fecha de inicio</CustomTableCell>
                <CustomTableCell>Estatus</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[].map(row => (
                <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {row.calories}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.fat}</CustomTableCell>
                  <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                  <CustomTableCell align="right">{row.protein}</CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Home);
