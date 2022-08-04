import { Box, Grid, Typography } from "@mui/material";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { useContext } from 'react';
import { UserContext } from "../context";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { GenerateCVV } from "../helpers";

export const CardGenerated = () => {

    const { userData } = useContext(UserContext);
    const cardNumber:number = 1234567890123456;
    return (
        <Grid
            container
            direction="column"
            sx={{
                width: { xs: 300, sm: 450 },
                height: { xs: 200, sm: 250 },
                p: 2,
                marginTop: { xs: 5, sm: 20 },
                backgroundColor: "secondary.main",
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Grid item container justifyContent="flex-end">
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ color: "#aaa9ad", fontSize: "35px", pr: 2 }}
                >
                    Fake Bank
                </Typography>
            </Grid>

            <Grid
                item
                container
                justifyContent="flex-start"
                sx={{ fontSize: "50px" }}
            >
                <DeveloperBoardIcon fontSize="inherit" color="info" />
            </Grid>

            <Grid item container justifyContent="flex-end">
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{ color: "#aaa9ad", fontSize: "35px", pr: 2 }}
                >
                    {cardNumber}
                </Typography>
            </Grid>

            <Grid item container justifyContent="flex-end">
                <Typography sx={{ color: "#aaa9ad", fontSize: "15px", pr: 2 }}>
                    Exp.Date: { new Date().getMonth() }/{ new Date().getFullYear() + 5 }
                </Typography>
                <Typography sx={{ color: "#aaa9ad", fontSize: "15px", pr: 2 }}>
                    CVV: { GenerateCVV() }
                </Typography>
            </Grid>

            <Grid item container justifyContent="flex-start">
                <Typography
                    sx={{ color: "#aaa9ad", fontSize: "20px", pr: 2 }}
                >
                   { (userData.name && userData.lastName) ? ` ${ userData.lastName }. ${ userData.name }`: ""}
                </Typography>
            </Grid>

        </Grid>
    );
};
