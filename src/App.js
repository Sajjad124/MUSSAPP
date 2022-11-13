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
        <Button startIcon={<Settings />} variant="contained" color="secondary">Settings</Button>
        <Button startIcon={<Add />} variant="contained" color="success">Add new post</Button>
        <Button variant="outlined" size="small">
          Outlined
        </Button>

        <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>;
      </div>
    </div>
  );
}
export default App;
