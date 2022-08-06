import { Alert, Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { LuhnAlgorithm } from '../helpers';

export const ValidateCard = () => {

  const [ numberInput, setNumberInput ] = useState<any>({ num:"" });

  const [ message, setMessage ] = useState<any>({});

  const [ open, setOpen ] = useState(false);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const validation = LuhnAlgorithm( numberInput.num );
    setMessage( validation );
    setOpen(true);
  }

  const handleInput = ( event:any )=>{
    setNumberInput({ ...numberInput, num: event.target.value });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:"center",
        alignContent:"center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <form onSubmit={ handleSubmit }>
        <Grid
          container
          sx={{
            backgroundColor: "white",
            padding: 3,
            marginLeft: { sm: 10 },
            marginTop: { xs: 12, sm: 20 },
            borderRadius: 2,
            width: { xs: 300, sm: 450 },
          }}
        >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              required
              label="Card Number"
              type="text"
              placeholder="1234 5678 9012 3456"
              name="num"
              value={ numberInput.num }
              onChange={ handleInput }
              fullWidth
            />
          </Grid>

          <Grid container spacing={0} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={8}>
              <Button
                type="submit"
                variant="contained"
              >
                Validate
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>

      <Snackbar 
      open={open}>
        {
        ( message.errorCode === 0 )?
        <Alert severity="success" onClose={() => { setOpen( !open ) }}>The credit card number is valid !</Alert>
                                  :
          <Alert severity="error" onClose={() => { setOpen( !open ) }}>The credit card number is not valid — check it out!</Alert>
        }
          
      </Snackbar>
    </Box>
  )
}
