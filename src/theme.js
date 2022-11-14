import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#000",
    },
    OtherColor: {
      main: "#999",
    },
  },
});
export default theme;
