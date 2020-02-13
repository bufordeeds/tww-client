import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function FilterNav({ setNavFilter }) {
  return (
    <AppBar className={"filter-nav"} position="sticky">
      <Toolbar>
        <Button onClick={() => setNavFilter("")} color="inherit">
          All
        </Button>
        <Button onClick={() => setNavFilter("wing")} color="inherit">
          Wings
        </Button>
        <Button onClick={() => setNavFilter("side")} color="inherit">
          Sides
        </Button>
        <Button onClick={() => setNavFilter("merch")} color="inherit">
          Merch
        </Button>
      </Toolbar>
    </AppBar>
  );
}
