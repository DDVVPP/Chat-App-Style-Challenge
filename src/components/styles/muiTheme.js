import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const Muitheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default Muitheme;
