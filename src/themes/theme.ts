import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2f3e46',
    },
    secondary: {
      main: '#1A1849',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: '#aaa9ad',
    },
  },
});

