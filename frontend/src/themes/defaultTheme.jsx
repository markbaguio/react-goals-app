import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#364966",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

export default defaultTheme;
