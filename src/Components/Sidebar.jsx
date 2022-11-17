import {
  AccountCircle,
  DarkMode,
  Diversity3,
  Group,
  Home,
  Logout,
  Pages,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      sx={{
        display: { xs: "none", sm: "block" },
        boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
        paddingRight: "30px",
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem
            disablePadding
            // sx={{
            //   backgroundColor: "rgba(0,0,0,0.1)",
            //   borderRadius: "0px 50px 50px 0px",
            // }}
          >
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
