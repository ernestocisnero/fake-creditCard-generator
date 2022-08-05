import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { LuhnAlgorithm } from '../helpers';

export const ValidateCard = () => {

  useEffect(() => {
    console.log(LuhnAlgorithm(5204740009900014));
  }, [])
  
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
        <Grid
          container
          sx={{
            backgroundColor: "white",
            padding: 3,
            marginLeft: { xs: 5, sm: 10 },
            marginTop: { xs: 20, sm: 20 },
            borderRadius: 2,
            width: { xs: 300, sm: 450 },
          }}
        >
          <Typography variant="h6" component="h6">Soon...</Typography>
          <p>
            
          </p>
          
        </Grid>
      </Grid>
    </Box>
  )
}
