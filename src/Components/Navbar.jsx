import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">MussApp</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
