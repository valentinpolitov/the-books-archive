import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005E3D"
    }
  }
});

export default responsiveFontSizes(theme);
