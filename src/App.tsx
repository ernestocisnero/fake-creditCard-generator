import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import { CardData } from "./components/CardData";
import { CardNotGenerated } from "./components/CardNotGenerated";

function App() {
  return (
    <Box sx={{ display:'flex', flexDirection:'column', width: '100vw',height: '100vh',backgroundColor: 'primary.main' }}>

     
        <Typography variant="h4" component="h1" align="center" padding={ 3 } sx={{ color:'white' }}>Fake Credit Card Generator</Typography>
      

        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 12 }}>
          <Grid item xs={4} >
            <CardData />
          </Grid>

          <Grid item xs={8} sx={{ display:'flex', justifyContent:'center', alignContent:'center'}}>
            <CardNotGenerated />
          </Grid>
        </Grid>
      
      
    </Box>
  );
}

export default App;
