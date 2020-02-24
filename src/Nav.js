import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import history from "./history";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

const logout = setCart => {
  setCart([]);
  localStorage.clear();
  history.push("/sign-in");
};
export default function Nav({ cartLength, setCart }) {
  // const classes = useStyles();

  return (
    <div className={"nav"}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link className={"logo-div"} to={"/"}>
            <img
              className={"logo"}
              src="tww-logo.png"
              alt="tommy want wingy logo"
            ></img>
          </Link>
          {cartLength > 0 ? (
            <Link to={"/checkout"} className={"nav__cart-link"}>
              <Button color="inherit">
                <FAI icon={"shopping-cart"} size={"2x"} color={"white"} />
                <span className="cart__counter">{cartLength}</span>
              </Button>
            </Link>
          ) : (
            <></>
          )}
          {localStorage.jwt ? (
            <>
              <Link className={"nav-link"} to="/order-history">
                Order History
              </Link>
              <Link className={"nav-link"} to={"/"}>
                <Button onClick={() => logout(setCart)} color="inherit">
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <Link className={"nav-link"} to={"/sign-in"}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
