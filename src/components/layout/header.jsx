import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Quikie Apps</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header;