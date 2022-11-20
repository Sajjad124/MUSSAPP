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
        <Navbar />
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

// const BlueButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#000",
//   color: "#888",
//   margin: 5,
//   "&:hover": { backgroundColor: "lightblue" },
//   "&:disabled": { backgroundColor: "gray", color: "white" },
// }));

//   <div className="main-div">
// <Button variant="text">Text</Button>
// <Button startIcon={<Settings />} variant="contained" color="secondary">
//   Settings
// </Button>
// <Button startIcon={<Add />} variant="contained" color="success">
//   Add new post
// </Button>
// <Button variant="outlined" size="small">
//   Outlined
// </Button>
// <Typography variant="h2" component="p">
//   it uses h2 style but it's a paragraph tag
// </Typography>
// <BlueButton variant="contained">My Button</BlueButton>
//   <BlueButton variant="contained">My Another Button</BlueButton>
// </div> */
// }
