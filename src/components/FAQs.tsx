import { Box, Grid, Typography } from "@mui/material";

export const FAQs = () => {
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
            marginTop: { xs: 2, sm: 20 },
            borderRadius: 2,
            width: { xs: 300, sm: 450 },
          }}
        >
          <Typography variant="h6" component="h6">Generated credit cards are real?</Typography>
          <p>
            Generated credit cards are real in the way that its number are real and valid. This numbers are based on Luhn's 
            algorithm, which is on of the most used method to validate credit card numbers. So, you can use your card for some free 
            services that request credit card information.
          </p>
          
        </Grid>

        <Grid
          container
          direction="column"
          sx={{
            backgroundColor: "white",
            padding: 3,
            marginLeft: { xs: 5, sm: 10 },
            marginTop: { xs: 2, sm: 20 },
            borderRadius: 2,
            width: { xs: 300, sm: 450 },
          }}
        >
          <Typography variant="h6" component="h6">Can I buy using a generated credit card?</Typography>
          <p>
            No, you can't buy anything using your generated credit card, due it's not linked to any real bank account,
            but, you do can use it for register in some platforms that requires a credit card for a free trial time, 
            after that time your account won't be renewed.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};
