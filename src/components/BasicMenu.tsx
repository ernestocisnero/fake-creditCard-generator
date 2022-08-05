import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ backgroundColor: 'primary.main' }}
      >
        <MenuIcon sx={{ color: '#fff' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Generate</MenuItem>
        </Link>

        <Link to="/validate-card" style={{ color: "black", textDecoration: "none" }}>

        <MenuItem onClick={handleClose}>Validate Number</MenuItem>
        </Link>

        <Link to="/faqs" style={{ color: "black", textDecoration: "none" }}>

        <MenuItem onClick={handleClose}>FAQs</MenuItem>
        </Link>
      </Menu>
    </>
  );
}