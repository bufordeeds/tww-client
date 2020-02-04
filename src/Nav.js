import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from 'react-router-dom'
import history from './history'

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

const logout = setIsLoggedIn => {
  localStorage.clear();
  setIsLoggedIn(false);
  history.push('/sign-in')
};
export default function Nav({ setIsLoggedIn }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tommy Want Wingy
          </Typography>
          {localStorage.jwt ? (
            <Link to={'/'}>
              <Button onClick={() => logout(setIsLoggedIn)} color="inherit">
                Logout
              </Button>
            </Link>
          ) : (
            <Link to={"/sign-in"}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
