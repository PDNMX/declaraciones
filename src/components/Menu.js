import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import routes from "../routes/declaraciones";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const padres = (ruta, match, handleClick, state) => {
  return (
    <ListItem button onClick={handleClick(ruta.path)}>
      <ListItemText primary={ruta.name} />
      {state.path === ruta.path ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
};

const hijos = (child, ruta, match, classes, state, handleClick) => {
  let pathComplete = ruta.path + child.path;
  // console.log(pathComplete, match.path);
  return (
    <Collapse
      in={state.path === ruta.path}
      timeout="auto"
      unmountOnExit
      key={child.key}
    >
      <List component="div" disablePadding>
        <Link
          component={RouterLink}
          underline="none"
          to={pathComplete}
          onClick={handleClick(ruta.path)}
        >
          <ListItem
            button
            className={classes.nested}
            selected={match.path === pathComplete}
          >
            <ListItemText primary={child.name} />
          </ListItem>
        </Link>
      </List>
    </Collapse>
  );
};
class MenuListComposition extends React.Component {
  constructor(props) {
    super(props);
    let position = "/" + props.match.path.split("/")[1] || "";

    // console.log("constructor", position);

    this.state = {
      path: position
    };
  }

  handleClick = actual => event => {
    // console.log("actual", actual);
    this.setState({ path: actual }, () => {
      // console.log("state", this.state);
    });
  };

  render() {
    const { classes, match } = this.props;
    // console.log("path", match.path);
    return (
      <div style={{ margin: 10 }}>
        <Paper className={classes.paper}>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Secciones</ListSubheader>}
            className={classes.root}
          >
            {routes.map(ruta => {
              return (
                <div key={ruta.key}>
                  {padres(ruta, match, this.handleClick, this.state)}
                  {ruta.childs.map(child => {
                    return hijos(
                      child,
                      ruta,
                      match,
                      classes,
                      this.state,
                      this.handleClick
                    );
                  })}
                </div>
              );
            })}
          </List>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MenuListComposition);
