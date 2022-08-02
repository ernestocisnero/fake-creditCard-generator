import { Button, Grid, TextField } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';

export const CardData = () => {
    return (
        <form>
            <Grid
                container
                sx={{
                    backgroundColor: "white",
                    padding:3,
                    marginLeft: { xs: 5, sm: 10  },
                    marginTop: {xs: 2, sm: 20 },
                    borderRadius: 2,
                    width: { xs:300, sm: 450 },
                }}
            >
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField required label="Name" type="text" placeholder="John" fullWidth />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField required label="Last Name" type="text" placeholder="Doe" fullWidth/>
                </Grid>

                <Grid container spacing={0} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={8}>
                        <Button variant="contained" endIcon={<CreditCardIcon />}>Generate Credit Card</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};
