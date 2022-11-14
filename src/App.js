import * as React from "react";
import { Add, Settings } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";
import theme from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styled from "@emotion/styled";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": { backgroundColor: "gray", color: "white" },
  }));

  return (
    <div className="App">
      <div className="main-div">
        <Button variant="text">Text</Button>
        <Button startIcon={<Settings />} variant="contained" color="OtherColor">
          Settings
        </Button>
        <Button startIcon={<Add />} variant="contained" color="success">
          Add new post
        </Button>
        <Button variant="outlined" size="small">
          Outlined
        </Button>
        <Typography variant="h2" component="p">
          it uses h2 style but its a paragraph tag
        </Typography>
        {/* ; */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "skyblue",
            color: "#888",
            margin: 5,
            "&:hover": { backgroundColor: "lightblue" },
            "&:disabled": { backgroundColor: "gray", color: "white" },
          }}
        >
          My Unique Button
        </Button>
        <BlueButton variant="contained">My Button</BlueButton>
      </div>
    </div>
  );
}
export default App;
