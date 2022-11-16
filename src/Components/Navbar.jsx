import {
  Logout,
  Mail,
  Notifications,
  SettingsRounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";
import user from "../Images/user.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MussApp
        </Typography>
        <VolunteerActivismRounded
          sx={{
            width: "30px",
            height: "30px",
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={3}
            color="error"
            sx={{
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "35px", height: "35px" }}
            alt="Remy Sharp"
            src={user}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src={user}
          />
          <Typography variant="span">Sajjad</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ marginTop: "40px" }}
      >
        <MenuItem>
          <AccountCircleIcon />
          Profile
        </MenuItem>
        <MenuItem>
          <SettingsRounded />
          Settings
        </MenuItem>
        <MenuItem>
          <Logout />
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
