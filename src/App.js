import * as React from "react";
import theme from "./theme";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styled from "@emotion/styled";

function App() {
  return <div className="App">Start App</div>;
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
