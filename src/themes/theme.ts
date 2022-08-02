import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2f3e46',
    },
    secondary: {
      main: '#52796f',
    },
    error: {
      main: red.A400,
    },
  },
});

