import {
  Mail,
  Notifications,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
} from "@mui/material";
import React from "react";
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
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src={user}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src={user}
          />
          <Typography variant="span">Sajjad</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
