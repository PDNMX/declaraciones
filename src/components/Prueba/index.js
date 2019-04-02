import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

class SimpleCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent />
      </Card>
    );
  }
}

export default withStyles(styles)(SimpleCard);
