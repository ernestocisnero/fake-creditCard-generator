import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import "./App.css";
import { CardData, CardNotGenerated } from "./components";
import { LuhnAlgorithm } from "./helpers";
import { CardGenerated } from './components/CardGenerated';

function App() {
  const cardNumberExample: number = 1234567890123456;

  useEffect(() => {
    LuhnAlgorithm(cardNumberExample);
  }, [cardNumberExample]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        padding={3}
        sx={{ color: "white" }}
      >
        Fake Credit Card Generator
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 2, md: 12 }}
      >
        <Grid item xs={4}>
          <CardData />
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* <CardNotGenerated /> */}
          <CardGenerated />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
