import * as React from "react";
import Button from "@mui/material/Button";
import { Add, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <div className="main-div">
        <Button variant="text">Text</Button>
        <Button startIcon={<Settings />} variant="contained" color="secondary">
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
        ;
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
      </div>
    </div>
  );
}
export default App;
