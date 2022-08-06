
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import { BasicMenu } from "./BasicMenu";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useTheme } from '@mui/material/styles';

export const NavBar = () => {

    const themed = useTheme();
    const matches = useMediaQuery( themed.breakpoints.down("sm") );
    console.log("This match",matches);

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: "100%" },
            }}
        >
            <Toolbar>
                
                <IconButton size="large" edge="start" color="inherit" aria-label="logo" >
                    <CreditCardIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    FakeCardGenerator
                </Typography>

                { matches ? <BasicMenu /> :
                <Stack direction="row" spacing={2}>

                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                        <Button color="inherit">
                            Generate
                        </Button>
                    </Link>
                    <Link to="/validate-card" style={{ color: "#fff", textDecoration: "none" }}>
                        <Button color="inherit">
                            Validate your card
                        </Button>
                    </Link>
                    <Link to="/faqs" style={{ color: "#fff", textDecoration: "none" }}>
                        <Button color="inherit">
                            FAQs
                        </Button>
                    </Link>
                </Stack>
                }
            </Toolbar>
        </AppBar>
    );
};
