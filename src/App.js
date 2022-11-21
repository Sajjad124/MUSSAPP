import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { useState } from "react";
import Login from "./Components/Login";
// import theme from "./theme";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import styled from "@emotion/styled";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing="2" justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
        {/* <Login /> */}
      </Box>
    </ThemeProvider>
  );
}
export default App;
