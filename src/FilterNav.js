import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function FilterNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit">All</Button>
          <Button color="inherit">Wings</Button>
          <Button color="inherit">Sides</Button>
          <Button color="inherit">Merch</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
