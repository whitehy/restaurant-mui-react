import { createTheme, responsiveFontSizes } from "@mui/material/styles";
//import { purple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {main: '#40464d',},
    secondary: {main: '#40464d',},
  },
});

theme = responsiveFontSizes(theme);

export default theme;