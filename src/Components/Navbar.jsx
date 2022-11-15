import { VolunteerActivismRounded } from "@mui/icons-material";
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
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MussApp
        </Typography>
        <VolunteerActivismRounded
          sx={{ display: { xs: "block", sm: "none" } }}
        />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
