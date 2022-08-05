import { Box, Grid, Typography } from "@mui/material";
import { useContext } from 'react';
import { CardData, CardNotGenerated, CardGenerated } from "./";
import { UserContext } from "../context";


export const Generator = ()=> {
  const { userData } = useContext<any>(UserContext);

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
          {
            (userData.name && userData.lastName) ? <CardGenerated /> : <CardNotGenerated />
          }
          
          
        </Grid>
      </Grid>
    </Box>
  );
}

