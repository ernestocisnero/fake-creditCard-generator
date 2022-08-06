import { Box, Button, Divider, IconButton, List, ListItem, makeStyles, SwipeableDrawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRightOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from 'react';




export const HambMenu = () => {

    const [openClose, setOpenClose ] = useState( false );

    const styles = {
        paper: {
            background: "blue"
        }
    };

    return (
        <>
            <IconButton color="inherit" onClick={ ()=> setOpenClose(true) }>
                <MenuIcon />
            </IconButton>
        
            <SwipeableDrawer anchor="right" open={openClose} onOpen={ ()=> setOpenClose(true) } onClose={ ()=> setOpenClose(false) }>
                <IconButton onClick={ ()=> setOpenClose(false) }>
                    <ChevronRightOutlined />
                </IconButton>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/" style={{ color: "black", textDecoration: "none" }}> Generate</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/validate-card" style={{ color: "black", textDecoration: "none" }}>Validate your card</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/faqs" style={{ color: "black", textDecoration: "none" }}>FAQs</Link>
                    </ListItem>


                </List>
            </SwipeableDrawer>
        </>
    )
}
