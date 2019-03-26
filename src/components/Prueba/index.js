import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: 10
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class SimpleCard extends Component {
  render(){

      const { classes } = this.props;

      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Title
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Subtitle
            </Typography>
            <Typography component="p">
              content
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">button</Button>
          </CardActions>
        </Card>
      );
  }
}

export default withStyles(styles)(SimpleCard);
