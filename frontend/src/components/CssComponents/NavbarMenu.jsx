import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import {  Box } from '@mui/material';


export default function NavbarMenu() {
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

   
   
    return (
        <Box>
            <IconButton
                sx={{
                    color: '#06b6d4',
                    backgroundColor: '#161D2F',
                   
                }}
                aria-label='more'
                aria-controls='long_menu'
                aria-expanded='true'
                aria-haspopup="true"
                onClick={handleClick}
            >
                <AppsIcon sx={{ fontSize: '36px' }} />
            </IconButton>
           

        </Box >
    );
}
