import { WindowSharp } from "@mui/icons-material";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { BasicMenu } from "./BasicMenu";

export const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: "100%" },
                ml: { sm: "240px" },
            }}
        >
            <Toolbar>
                {window.innerWidth <= 601 ? (
                    <BasicMenu />
                ) : (
                    <Grid container direction="row" justifyContent="space-between">
                        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                            <Typography variant="h6" noWrap component="div">
                                FakeCardGenerator
                            </Typography>
                        </Link>

                        <Link
                            to="/validate-card"
                            style={{ color: "#fff", textDecoration: "none" }}
                        >
                            <Typography variant="h6" noWrap component="div">
                                Validate your card
                            </Typography>
                        </Link>

                        <Link to="/faqs" style={{ color: "#fff", textDecoration: "none" }}>
                            <Typography variant="h6" noWrap component="div">
                                FAQs
                            </Typography>
                        </Link>
                    </Grid>
                )}
            </Toolbar>
        </AppBar>
    );
};
