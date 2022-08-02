import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import { CardData } from "./components/CardData";
import { CardNotGenerated } from "./components/CardNotGenerated";

function App() {
  return (
    <Box sx={{ display:'flex', flexDirection:'column', width: '100vw',height: '100vh',backgroundColor: 'primary.main' }}>

     
        <Typography variant="h4" component="h1" align="center" padding={ 3 } sx={{ color:'white' }}>Fake Credit Card Generator</Typography>
      

        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ height:'calc(100vh - 74px)'}}>
            <CardData />
          </Grid>

          <Grid item xs={8} sx={{ display:'flex', justifyContent:'center', alignContent:'center', height:'calc(100vh - 74px)' }}>
            <CardNotGenerated />
          </Grid>
        </Grid>
      
      
    </Box>
  );
}

export default App;
