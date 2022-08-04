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
            algorithm, which is on of the most used method to validate credit card numbers and others security numbers. This algorithm
            performs an specific checksum among all its gigits to validate whether or not a number is valid . This numbers are generated randomly and CVV code as well.  
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
            No, you can't buy anything using your generated credit card, due it's not linked to any real bank account, we do recomend you
            not to try use it in real pusrchases. You can use it instead for register in some platforms that requires a credit card for a free trial time, 
            after that time your account won't be renewed. For testing purposes, sometimes programmers needs to test checkout systems of e-commerce
            they are working in, and this kind of credit cards are usefull for this.
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};
